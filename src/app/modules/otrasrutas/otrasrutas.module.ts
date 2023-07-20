import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOtrasRutasComponent } from './components/home-otras-rutas/home-otras-rutas.component';
import {OtrasrutasRoutingModule} from "./otrasrutas-routing.module";
import { AboutOtrasRutasComponent } from './components/about-otras-rutas/about-otras-rutas.component';



@NgModule({
  declarations: [
    HomeOtrasRutasComponent,
    AboutOtrasRutasComponent
  ],
  imports: [
    CommonModule,
    OtrasrutasRoutingModule
  ]
})
export class OtrasrutasModule { }
