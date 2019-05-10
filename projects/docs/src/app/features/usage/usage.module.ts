import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsageComponent } from './usage/usage.component';
import { Example1Component } from './example1/example1.component';

@NgModule({
  declarations: [UsageComponent, Example1Component],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UsageComponent]
})
export class UsageModule { }
