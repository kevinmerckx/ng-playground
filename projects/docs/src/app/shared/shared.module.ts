import { NgModule } from '@angular/core';
import { DocsModule } from 'ng-documentation';
import { CommonModule } from '@angular/common';
import { PlaygroundModule } from '../../../../ng-playground/src/public_api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DocsModule,
    PlaygroundModule
  ]
})
export class SharedModule { }
