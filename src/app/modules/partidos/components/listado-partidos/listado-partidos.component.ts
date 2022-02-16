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
  public listadoVisiblePromesaProcesada: Partido[] = [];
  public listadoVisibleSubscribeProcesado: Partido[] = [];

  constructor(private apiClientService: ApiClientService) { }

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
    
    
    this.listadopartidosObservable.subscribe((data) => {
      console.log(data);
      console.log(data.length);

      data.forEach( (value : Partido) =>
        this.listadoVisible.push(value)
      );

      console.log(this.listadoVisible);
    });

    let datosPromesa = this.apiClientService.getProcesedDataAsync();
    console.log("datos promesa");
    datosPromesa.then(
      (data: Partido[])=>{
        console.log(data);
        this.listadoVisiblePromesaProcesada = data;
      }
    );
    datosPromesa.catch(
      (error)=>{
        console.log("Promise rejected with " + JSON.stringify(error));
      }
    );
    let datosSubscribe = this.apiClientService.getProcesedSubscribeDataAsync();
    console.log("datos subscribe");
    datosSubscribe.then(
      (data: Partido[])=>{
        console.log(data);
        this.listadoVisibleSubscribeProcesado = data;
      }
    );
    datosSubscribe.catch(
      (error)=>{
        console.log("Promise rejected with " + JSON.stringify(error));
      }
    );
  }

}
