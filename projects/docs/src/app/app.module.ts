import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { DocsModule } from 'ng-documentation';
import { UsageComponent } from './features/usage/usage/usage.component';
import { UsageModule } from './features/usage/usage.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { PlaygroundModule } from '../../../ng-playground/src/public_api';

@Component({
  template: '<h1>Case #1</h1>'
})
class Case1Component {

}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Case1Component
  ],
  imports: [
    BrowserModule,
    UsageModule,
    SharedModule,
    DocsModule.configure({
      welcomePage: WelcomeComponent,
      componentPages: {
        usage: {
          title: 'Value Editor',
          component: UsageComponent
        }
      }
    }),
    PlaygroundModule.configure({
      routes: [
        { title: 'Case #1', component: Case1Component }
      ]
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
