import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryoneComponent } from './categories//categoryone/categoryone.component';
import { CategorytwoComponent } from './categories/categorytwo/categorytwo.component';


@NgModule({
  declarations: [
    CategoryoneComponent,
    CategorytwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryoneComponent,
    CategorytwoComponent
  ]
})
export class SharedModule { }
