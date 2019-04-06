import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaygroundModule } from '../../projects/ng-playground/src/public_api';
import { AppComponent } from './app.component';
import { CaseAComponent } from './cases/case-a/case-a.component';
import { CaseBComponent } from './cases/case-b/case-b.component';
import { CaseCComponent } from './cases/case-c/case-c.component';


@NgModule({
  declarations: [
    AppComponent,
    CaseAComponent,
    CaseBComponent,
    CaseCComponent
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
        { component: CaseCComponent, title: 'Case C' }
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
