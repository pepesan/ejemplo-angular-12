import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmoduloRoutingModule } from './submodulo-routing.module';
import { SubmoduloComponent } from './submodulo.component';


@NgModule({
  declarations: [
    SubmoduloComponent
  ],
  imports: [
    CommonModule,
    SubmoduloRoutingModule
  ]
})
export class SubmoduloModule { }
