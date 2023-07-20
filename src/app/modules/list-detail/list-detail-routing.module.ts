import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoComponent} from "./components/listado/listado.component";
import {DetailComponent} from "./components/detail/detail.component";

const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'detalle/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDetailRoutingModule { }
