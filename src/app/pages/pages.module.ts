import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
