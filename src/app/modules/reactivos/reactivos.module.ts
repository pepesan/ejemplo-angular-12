import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBasicoComponent} from "./components/form-basico/form-basico.component";
import {ReactiveFormsModule} from "@angular/forms";
import { FormGroupBasicoComponent } from './components/form-group-basico/form-group-basico.component';
import { FormGroupAnidadoBasicoComponent } from './components/form-group-anidado-basico/form-group-anidado-basico.component';
import { FormBuilderBasicoComponent } from './components/form-builder-basico/form-builder-basico.component';



@NgModule({
  declarations: [FormBasicoComponent, FormGroupBasicoComponent, FormGroupAnidadoBasicoComponent, FormBuilderBasicoComponent],
  exports: [
    FormBasicoComponent,
    FormGroupBasicoComponent,
    FormGroupAnidadoBasicoComponent,
    FormBuilderBasicoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactivosModule { }
