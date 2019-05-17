# NG Playground

[![Build Status](https://travis-ci.org/kevinmerckx/ng-playground.svg?branch=develop)](https://travis-ci.org/kevinmerckx/ng-playground)
[![Greenkeeper badge](https://badges.greenkeeper.io/kevinmerckx/ng-playground.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ng-playground.svg)](https://badge.fury.io/js/ng-playground)

NG Playground enables developers to have a playground: easy setup to rapidly develop components/directives/pipes etc.

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
import { PlaygroundModule, PlaygroundComponent } from 'ng-playground';
import {
  CaseAComponent,
  CaseBComponent,
  CaseCComponent
} from './cases';
import { CustomMenuAreaComponent } from './custom-menu-area/custom-menu-area.component';

@NgModule({
  declarations: [
    CaseAComponent,
    CaseBComponent,
    CaseCComponent,
    CustomMenuAreaComponent
  ],
  entryComponents: [CustomMenuAreaComponent],
  imports: [
    BrowserModule,
    PlaygroundModule.configure({
      routes: [
        { title: 'Case A', component: CaseAComponent },
        { title: 'Case B', children: [ … ]},
        { title: 'Case C', component: CaseCComponent }
      ],
      customMenuComponent: CustomMenuAreaComponent
    })
  ],
  bootstrap: [PlaygroundComponent]
})
export class AppModule { }
```

In the `index.html`:

```html
<body>
  <pg-playground></pg-playground>
</body>
```

In `angular.json`, add the styles:

```json
"styles": [
  "node_modules/ng-playground/ng-playground.css"
]
```
