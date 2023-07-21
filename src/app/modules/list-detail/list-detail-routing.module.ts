import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoComponent} from "./components/listado/listado.component";
import {DetailComponent} from "./components/detail/detail.component";
import {TableComponent} from "./components/table/table.component";
import {FormComponent} from "./components/form/form.component";

const routes: Routes = [
  { path: 'list', component: ListadoComponent },
  { path: '', component: TableComponent },
  { path: 'detalle/:id', component: DetailComponent },
  { path: 'edit/:id', component: FormComponent },
  { path: 'add', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDetailRoutingModule { }
