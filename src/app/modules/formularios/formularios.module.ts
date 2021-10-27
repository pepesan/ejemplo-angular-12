import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainFormComponent} from "./components/main-form/main-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [MainFormComponent],
  exports: [
    MainFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormulariosModule { }
