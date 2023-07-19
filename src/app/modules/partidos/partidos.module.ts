import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ApiClientService} from "./services/apiclient.service";
import { ListadoPartidosComponent } from './components/listado-partidos/listado-partidos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

    ListadoPartidosComponent
  ],
  providers: [ApiClientService],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  exports:[
    ListadoPartidosComponent
  ]
})
export class PartidosModule { }
