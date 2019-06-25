import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaygroundComponent, PlaygroundModule } from '../../projects/ng-playground/src/public_api';
import { CaseAComponent } from './cases/case-a/case-a.component';
import { CaseBComponent } from './cases/case-b/case-b.component';
import { CaseCComponent } from './cases/case-c/case-c.component';
import { CaseDComponent } from './cases/case-d/case-d.component';
import { CustomMenuAreaComponent } from './custom-menu-area/custom-menu-area.component';

@NgModule({
  declarations: [
    CaseAComponent,
    CaseBComponent,
    CaseCComponent,
    CaseDComponent,
    CustomMenuAreaComponent
  ],
  entryComponents: [
    CustomMenuAreaComponent,
    CaseAComponent,
    CaseBComponent,
    CaseCComponent,
    CaseDComponent
  ],
  imports: [
    BrowserModule,
    PlaygroundModule.configure({
      routes: [
        { component: CaseAComponent, title: 'Case A' },
        { title: 'Case B', children: [
          { component: CaseAComponent, title: 'Case A' },
          { component: CaseBComponent, title: 'Case B' },
          { component: CaseCComponent, title: 'Case C' }
        ]},
        { component: CaseCComponent, title: 'Case C' },
        { component: CaseDComponent, title: 'Case D' }
      ],
      customMenuComponent: CustomMenuAreaComponent
    }),
    PlaygroundModule
  ],
  bootstrap: [PlaygroundComponent]
})
export class AppModule { }
