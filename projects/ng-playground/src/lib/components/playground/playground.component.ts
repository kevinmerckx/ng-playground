import { Component, Inject, Optional, Type } from '@angular/core';
import { AbstractRoute, CustomRoute, LeafRoute, PLAYGROUND_CUSTOM_MENU_COMPONENT, PLAYGROUND_ROUTES } from '../../ng-playground.tokens';

const SEPARATOR = '/';

@Component({
  selector: 'pg-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.sass']
})
export class PlaygroundComponent {
  sections: {
    slot: string
    component: any
  }[];
  currentSection = '';

  constructor(
    @Inject(PLAYGROUND_ROUTES) private routes: CustomRoute[],
    @Optional() @Inject(PLAYGROUND_CUSTOM_MENU_COMPONENT) public customMenuComponent: Type<any>
  ) {
    const transform = (rs: CustomRoute[], prefix = '') => {
      const result = rs.map(r => ({
        slot: prefix + r.title,
        component: (r as LeafRoute).component
      }));
      return rs.reduce((prev, curr) => {
        return prev.concat(transform((curr as AbstractRoute).children || [], prefix + curr.title + SEPARATOR));
      }, result);
    };
    this.sections = transform(this.routes);
  }

}
