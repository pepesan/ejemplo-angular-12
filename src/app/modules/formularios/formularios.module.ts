import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainFormComponent} from "./components/main-form/main-form.component";
import {FormsModule} from "@angular/forms";
import { RadiosComponent } from './components/radios/radios.component';

@NgModule({
  declarations: [MainFormComponent, RadiosComponent],
  exports: [
    MainFormComponent,
    RadiosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormulariosModule { }
