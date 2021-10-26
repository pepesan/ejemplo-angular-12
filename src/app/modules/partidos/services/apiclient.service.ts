import { Injectable } from '@angular/core';
import {Partido} from "../models/partido";
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private listado: Partido[] = [];
  private url : string = 'https://cursosdedesarrollo.com/pactometro/resultados.json';

  constructor(private _httpClient: HttpClient) {
    console.log("cargado el cliente HTTP");
  }
  getData() {
    return this._httpClient.get<Observable<Partido[]>>(this.url)
        .pipe(catchError(this.handleError('get', [])));
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
