import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Formulario01Component } from './components/formulario01/formulario01.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PasswordIgualesDirective } from './components/formulario01/password-iguales.directive';



@NgModule({
  declarations: [
    Formulario01Component,
    PasswordIgualesDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    Formulario01Component,
    PasswordIgualesDirective
  ]
})
export class EjerciciosModule { }
