import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideRoutes, RouterModule } from '@angular/router';
import { TreeModule } from 'iwerk-angular-ui';
import { AbstractComponent } from './components/abstract/abstract.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { EditorConfiguration, ValueEditorComponent } from './components/value-editor/value-editor.component';
import { AbstractRoute, CustomRoute, LeafRoute, PLAYGROUND_ROUTES, RouteWithLink } from './ng-playground.tokens';
import { ValuePipe } from './pipes/value.pipe';

export { EditorConfiguration };

@NgModule({
  declarations: [
    PlaygroundComponent,
    AbstractComponent,
    ValueEditorComponent,
    ValuePipe
  ],
  imports: [
    TreeModule,
    RouterModule.forRoot([]),
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    PlaygroundComponent,
    RouterModule,
    ValuePipe,
    ValueEditorComponent
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
