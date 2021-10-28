import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubrutasRoutingModule } from './subrutas-routing.module';
import { SubrutasComponent } from './components/subrutas/subrutas.component';
import { ListadoRutasComponent } from './components/listado-rutas/listado-rutas.component';


@NgModule({
  declarations: [
    SubrutasComponent,
    ListadoRutasComponent
  ],
  imports: [
    CommonModule,
    SubrutasRoutingModule
  ]
})
export class SubrutasModule { }
