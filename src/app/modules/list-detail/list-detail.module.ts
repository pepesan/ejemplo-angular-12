import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDetailRoutingModule } from './list-detail-routing.module';
import { ListadoComponent } from './components/listado/listado.component';
import {ListService} from "./services/list.service";
import {DetailComponent} from "./components/detail/detail.component";


@NgModule({
  declarations: [
    ListadoComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ListDetailRoutingModule
  ]
  ,providers: [ListService]
})
export class ListDetailModule { }
