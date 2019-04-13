# NG Playground

[![Build Status](https://travis-ci.org/kevinmerckx/ng-playground.svg?branch=develop)](https://travis-ci.org/kevinmerckx/ng-playground)
[![Greenkeeper badge](https://badges.greenkeeper.io/kevinmerckx/ng-playground.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ng-playground.svg)](https://badge.fury.io/js/ng-playground)

NG Playground aimts enables developers to have a playground: easy setup to rapidly develop components/directives/pipes etc.

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
import {
  CaseAComponent,
  CaseBComponent
  CaseCComponent
} from './cases';


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

```json
"styles": [
  "node_modules/ng-playground/ng-playground.css"
]
```
