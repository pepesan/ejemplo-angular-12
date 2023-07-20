import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeOtrasRutasComponent} from "./components/home-otras-rutas/home-otras-rutas.component";
import {AboutOtrasRutasComponent} from "./components/about-otras-rutas/about-otras-rutas.component";

const routes: Routes = [
  { path: '', component: HomeOtrasRutasComponent },
  { path: 'about', component: AboutOtrasRutasComponent },
  // { path: 'listado', component: ListadoRutasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtrasrutasRoutingModule { }
