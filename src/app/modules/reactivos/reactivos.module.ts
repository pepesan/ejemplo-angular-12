import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBasicoComponent} from "./components/form-basico/form-basico.component";



@NgModule({
  declarations: [FormBasicoComponent],
  exports: [
    FormBasicoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReactivosModule { }
