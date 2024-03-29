import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBasicoComponent} from "./components/form-basico/form-basico.component";
import {NG_VALIDATORS, ReactiveFormsModule} from "@angular/forms";
import { FormGroupBasicoComponent } from './components/form-group-basico/form-group-basico.component';
import { FormGroupAnidadoBasicoComponent } from './components/form-group-anidado-basico/form-group-anidado-basico.component';
import { FormBuilderBasicoComponent } from './components/form-builder-basico/form-builder-basico.component';
import { MyCustomValidationComponent } from './components/my-custom-validation/my-custom-validation.component';
import {ForbiddenNameValidator} from "./forbidden-name.directive";
import { FormValidatePasswordsComponent } from './components/form-validate-passwords/form-validate-passwords.component';



@NgModule({
  declarations: [FormBasicoComponent, FormGroupBasicoComponent, FormGroupAnidadoBasicoComponent, FormBuilderBasicoComponent, MyCustomValidationComponent, FormValidatePasswordsComponent],
  exports: [
    FormBasicoComponent,
    FormGroupBasicoComponent,
    FormGroupAnidadoBasicoComponent,
    FormBuilderBasicoComponent,
    MyCustomValidationComponent,
    FormValidatePasswordsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactivosModule { }
