import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalEventosComponent } from './components/principal-eventos/principal-eventos.component';



@NgModule({
  declarations: [
    PrincipalEventosComponent
  ],
  exports: [
    PrincipalEventosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventosModule { }
