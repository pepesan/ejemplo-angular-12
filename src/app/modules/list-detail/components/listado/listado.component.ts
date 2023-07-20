import { Component } from '@angular/core';
import {ListService} from "../../services/list.service";
import {Dato} from "../../classes/dato";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent {

  public listado: Dato[] = [];
  constructor(private listService: ListService) {

    this.listado = this.listService.datos;

  }


}
