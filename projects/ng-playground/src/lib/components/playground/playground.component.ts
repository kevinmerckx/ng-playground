import { Component, Inject, Optional, Type } from '@angular/core';
import { TreeComponent, TreeItem } from 'iwerk-angular-ui';
import { PlaygroundRoutes, PLAYGROUND_ROUTES, RouteWithLink, PLAYGROUND_CUSTOM_MENU_COMPONENT } from '../../ng-playground.tokens';

@Component({
  selector: 'pg-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.sass']
})
export class PlaygroundComponent {
  tree: TreeItem[];

  constructor(
    @Inject(PLAYGROUND_ROUTES) private routes: PlaygroundRoutes,
    @Optional() @Inject(PLAYGROUND_CUSTOM_MENU_COMPONENT) public customMenuComponent: Type<any>
  ) {
    const transform = (rs: RouteWithLink[]): TreeItem[] => {
      return rs.map(r => ({
        data: r,
        children: transform(r.children || [])
      })).filter(r => r.data.routerLink);
    };
    this.tree = transform(this.routes);
  }

  getLinkStyle(depth: number) {
    return { padding: `10px ${depth * 20}px` };
  }

  toggleExpand(tree: TreeComponent, item: TreeItem, $event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    $event.stopImmediatePropagation();
    tree.toggleExpand(item);
  }
}
