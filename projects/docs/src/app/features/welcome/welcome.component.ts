import { Component } from '@angular/core';

const CODE_INDEX = `…
<body>
  <pg-playground></pg-playground>
</body>
…`;

const CODE_MODULE = `import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaygroundComponent, PlaygroundModule } from 'ng-playground';
…

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
          someResolve: SomeResolver
        }}
      ]
    }),
    PlaygroundModule
  ],
  bootstrap: [PlaygroundComponent],
  providers: [SomeResolver]
})
export class AppModule { }`;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent {
  codeModule = CODE_MODULE;
  codeIndex = CODE_INDEX;
}
