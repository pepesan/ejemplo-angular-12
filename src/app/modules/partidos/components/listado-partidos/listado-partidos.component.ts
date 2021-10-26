import { Component, OnInit } from '@angular/core';
import {ApiClientService} from "../../services/apiclient.service";
import {Partido} from "../../models/partido";
import {Observable} from "rxjs";

@Component({
  selector: 'app-listado-partidos',
  templateUrl: './listado-partidos.component.html',
  styleUrls: ['./listado-partidos.component.sass']
})
export class ListadoPartidosComponent implements OnInit {

  public listado: any = this.apiClientService.getData().toPromise();
  public listadopartidosObservable: Observable<Partido[]> = this.apiClientService.getData();
  public listadoVisible: Partido[] = [];
  constructor(private apiClientService: ApiClientService) { }

  ngOnInit(): void {
    // console.log(this.listado);
    this.listadopartidosObservable.subscribe((data) => {
      console.log(data);
      console.log(data.length);

      data.forEach( (value : Partido) =>
        this.listadoVisible.push(value)
      );

      console.log(this.listadoVisible);
    });
  }

}
