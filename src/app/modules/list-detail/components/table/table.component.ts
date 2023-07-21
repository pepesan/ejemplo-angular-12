import { Component } from '@angular/core';
import {Dato} from "../../classes/dato";
import {ListService} from "../../services/list.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {
  public listado: Dato[] = [];
  constructor(private listService: ListService) {

    this.listado = this.listService.datos;

  }

}
