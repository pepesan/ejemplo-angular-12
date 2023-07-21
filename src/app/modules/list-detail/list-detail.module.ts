import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDetailRoutingModule } from './list-detail-routing.module';
import { ListadoComponent } from './components/listado/listado.component';
import {ListService} from "./services/list.service";
import {DetailComponent} from "./components/detail/detail.component";
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListadoComponent,
    DetailComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ListDetailRoutingModule,
    ReactiveFormsModule
  ]
  ,providers: [ListService]
})
export class ListDetailModule { }
