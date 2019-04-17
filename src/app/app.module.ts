import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaygroundComponent, PlaygroundModule } from '../../projects/ng-playground/src/public_api';
import { CaseAComponent } from './cases/case-a/case-a.component';
import { CaseBComponent } from './cases/case-b/case-b.component';
import { CaseCComponent } from './cases/case-c/case-c.component';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CaseDComponent } from './cases/case-d/case-d.component';

@Injectable()
class LoadStuffResolver implements Resolve<any> {
  resolve() {
    return new Observable<void>(obs => {
      setTimeout(() => {
        obs.next();
        obs.complete();
      }, 3000);
    });
  }

}
@NgModule({
  declarations: [
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
        { component: CaseDComponent, title: 'Case D', resolve: {
          loadStuff: LoadStuffResolver
        }}
      ]
    })
  ],
  bootstrap: [PlaygroundComponent],
  providers: [LoadStuffResolver]
})
export class AppModule { }
