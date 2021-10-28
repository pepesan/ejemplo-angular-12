import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubrutasComponent } from './components/subrutas/subrutas.component';
import {ListadoRutasComponent} from "./components/listado-rutas/listado-rutas.component";

const routes: Routes = [
  { path: '', component: SubrutasComponent },
  { path: 'listado', component: ListadoRutasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubrutasRoutingModule { }
