import { Injectable } from '@angular/core';
import {Partido} from "../models/partido";
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private listado: Partido[] = [];
  //private url : string = 'https://cursosdedesarrollo.com/pactometro/resultados.json';
  private url : string = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {
    console.log("cargado el cliente HTTP");
  }
  getData() {
    return this._httpClient.get<Observable<Partido[]>>(this.url)
        .pipe(catchError(this.handleError('get', [])));
  }
  async getDataAsync(): Promise<Partido[]>
  {
    let promesa = await this._httpClient.get<Observable<Partido[]>>(this.url)
        .pipe(catchError(this.handleError('get', []))).toPromise();
    return promesa;
  }  

  async getProcesedDataAsync(): Promise<Partido[]>
  {
    let mipromesa = new Promise<Partido[]>(
      (resolve,reject) => {
        let promesa = this._httpClient.get<Observable<Partido[]>>(this.url)
        .pipe(catchError(this.handleError('get', []))).toPromise();
        


        promesa.then(
          (data: Partido[]) =>
          {
            console.log(data);
            resolve(data);
          }
        );
                /*
        promesa.catch(
          (error: any) =>{
            console.log("Promise rejected with " + JSON.stringify(error));
            let listadoVacio: Partido[] = []
            return listadoVacio;
          }
        ); 
        */
      }
    );
    
    return mipromesa;
  } 
 
  private handleError (operation = 'operation', result?: any) {
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return result;
    };
  }
}
