import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineCustomElements } from 'core-playground/loader';
import { PlaygroundComponent } from './components/playground/playground.component';
import { EditorConfiguration, ValueEditorComponent } from './components/value-editor/value-editor.component';
import { CustomRoute, PLAYGROUND_CUSTOM_MENU_COMPONENT, PLAYGROUND_ROUTES } from './ng-playground.tokens';
import { ValuePipe } from './pipes/value.pipe';

export { EditorConfiguration };

defineCustomElements(window);

@NgModule({
  declarations: [
    PlaygroundComponent,
    ValueEditorComponent,
    ValuePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PlaygroundComponent,
    ValuePipe,
    ValueEditorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlaygroundModule {
  static configure(config: {
    routes: CustomRoute[]
    customMenuComponent?: Type<any>
  }): ModuleWithProviders {
    return {
      ngModule: PlaygroundModule,
      providers: [
        { provide: PLAYGROUND_ROUTES, useValue: config.routes },
        { provide: PLAYGROUND_CUSTOM_MENU_COMPONENT, useValue: config.customMenuComponent },
      ]
    };
  }
}
