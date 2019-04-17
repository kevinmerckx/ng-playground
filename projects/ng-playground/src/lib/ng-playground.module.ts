import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { provideRoutes, RouterModule } from '@angular/router';
import { TreeModule } from 'iwerk-angular-ui';
import { PlaygroundComponent } from './components/playground/playground.component';
import { PLAYGROUND_ROUTES, CustomRoute, RouteWithLink, LeafRoute, AbstractRoute } from './ng-playground.tokens';
import { AbstractComponent } from './components/abstract/abstract.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlaygroundComponent,
    AbstractComponent
  ],
  imports: [
    TreeModule,
    RouterModule.forRoot([]),
    CommonModule,
    FormsModule
  ],
  exports: [
    PlaygroundComponent,
    RouterModule
  ]
})
export class PlaygroundModule {
  static configure(config: {routes: CustomRoute[]}): ModuleWithProviders {
    const transform = (routes: CustomRoute[], current: string[] = []): RouteWithLink[] => {
      return routes.map(r => {
        const path = r.title.replace(/ /g, '');
        const newCurrent = current.concat([path]);
        const component = (r as LeafRoute).component || AbstractComponent;
        const result = {
          ...r,
          component,
          path,
          routerLink: newCurrent,
          resolve: r.resolve,
          children: transform((r as AbstractRoute).children || [], newCurrent)
        };
        if (component === AbstractComponent) {
          result.children.unshift({
            path: '',
            pathMatch: 'full',
            redirectTo: result.children[0].path,
            title: '',
            routerLink: undefined,
            children: undefined
          });
        }
        return result;
      });
    };
    const routesWithLink: RouteWithLink[] = transform(config.routes);
    return {
      ngModule: PlaygroundModule,
      providers: [
        { provide: PLAYGROUND_ROUTES, useValue: routesWithLink },
        provideRoutes(routesWithLink)
      ]
    };
  }
}
