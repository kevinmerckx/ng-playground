# NG Playground

Enable developers to have a playground: easy setup to rapidly develop components/directives/pipes etc.

## Get started

```sh
npm install --save-dev ng-playground
```

```sh
ng generate application playground
```

In the `app.module.ts` do as follows:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaygroundModule } from 'ng-playground';
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
          …
        ]},
        { component: CaseCComponent, title: 'Case C' }
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In the `app.component.html`:

```html
<pg-playground></pg-playground>
```

In `angular.json`, add the styles:

styles: [
  "node_modules/ng-playground/ng-playground.css"
]
