import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiClientService} from "../../services/apiclient.service";
import {Partido} from "../../models/partido";
import {Observable} from "rxjs";

@Component({
  selector: 'app-listado-partidos',
  templateUrl: './listado-partidos.component.html',
  styleUrls: ['./listado-partidos.component.sass']
})
export class ListadoPartidosComponent implements OnInit, OnDestroy {

  // Promesa que pasamos a la vista para cuando dispongamos del dato pintarlo por pantalla
  public listado: Promise<Partido[]> ;
  public listadopartidosObservable: Observable<Partido[]>;
  public listadoVisible: Partido[];
  public listadoVisiblePromesa: Partido[] = [];
  public listadoVisiblePromesaProcesada: Partido[] = [];
  public listadoVisibleSubscribeProcesado: Partido[] = [];

  constructor(private apiClientService: ApiClientService) {
    // Directamente consultamos al servicio para que devuelva una promesa con los datos del JSON
    this.listado = this.apiClientService.getData().toPromise();

    // Devuelve un Observable
    // this.listado = this.apiClientService.getDataAsync();
    this.listadopartidosObservable = this.apiClientService.getData();

    // Coloco los datos iniciales al listado visible
    this.listadoVisible = [];
  }

  ngOnInit(): void {
    // console.log(this.listado);
    let listadoPromesa = this.listadopartidosObservable.toPromise();
    listadoPromesa.then(
      (data: Partido[]): void =>
      {
        this.listadoVisiblePromesa = data;
      }
    );
    listadoPromesa.catch(
      (error): void =>{
        console.log("Promise rejected with " + JSON.stringify(error));
      }
    );

    // me subscribo al observable
    this.listadopartidosObservable.subscribe((data: Partido[]): void => {
      console.log(data);
      console.log(data.length);
      // pasar los datos una vez recibidos al listado visible
      // poco a poco
      data.forEach( (value : Partido) =>
        this.listadoVisible.push(value)
      );
      // del tirón
      this.listadoVisible = data;

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
      (data: Partido[]): void => {
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
  ngOnDestroy(): void {
    // unsubscribe
    // this.listadopartidosObservable.
  }

}
