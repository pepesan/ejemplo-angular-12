import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainFormComponent} from "./components/main-form/main-form.component";



@NgModule({
  declarations: [MainFormComponent],
  exports: [
    MainFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormulariosModule { }
