import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBasicoComponent} from "./components/form-basico/form-basico.component";
import {ReactiveFormsModule} from "@angular/forms";
import { FormGroupBasicoComponent } from './components/form-group-basico/form-group-basico.component';
import { FormGroupAnidadoBasicoComponent } from './components/form-group-anidado-basico/form-group-anidado-basico.component';



@NgModule({
  declarations: [FormBasicoComponent, FormGroupBasicoComponent, FormGroupAnidadoBasicoComponent],
  exports: [
    FormBasicoComponent,
    FormGroupBasicoComponent,
    FormGroupAnidadoBasicoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactivosModule { }
