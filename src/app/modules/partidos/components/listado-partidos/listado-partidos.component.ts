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
  public listadoVisiblePromesa: Partido[] = [];
  public listadoVisibleSubscribe: Partido[] = [];
  public datosProcesados: Promise<void>;
  constructor(private apiClientService: ApiClientService) {
    this.datosProcesados = this.apiClientService.getProcesedDataAsync();
    console.log("Datos procesados por la promesa");
    console.log(this.datosProcesados);
    this.datosProcesados.then(data => {
      console.log(data);
    });
    this.datosProcesados.catch(error =>{
      console.log(error)
    });

    console.log(this.datosProcesados);
   }

  ngOnInit(): void {
    // console.log(this.listado);
    let listadoPromesa = this.listadopartidosObservable.toPromise();
    listadoPromesa.then(
      (data) =>
      {
        this.listadoVisiblePromesa = data;
      }
    );
    listadoPromesa.catch(
      (error) =>{
        console.log("Promise rejected with " + JSON.stringify(error));
      }
    );    
    let datosPromesa = this.apiClientService.getDataAsync();
    console.log("datos promesa");
    datosPromesa.then(
      (data)=>{
        console.log(data);
      }
    );
    datosPromesa.catch(
      (error)=>{
        console.log("Promise rejected with " + JSON.stringify(error));
      }
    );
    
    this.listadopartidosObservable.subscribe((data) => {
      console.log(data);
      console.log(data.length);

      data.forEach( (value : Partido) =>
        this.listadoVisible.push(value)
      );

      console.log(this.listadoVisible);
    });
    
    //this.listadoVisibleSubscribe = this.apiClientService.getProcesedDataWithSubscribeAsync();
  }

}
