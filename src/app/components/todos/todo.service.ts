import { Injectable } from '@angular/core';
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _dato: Todo;

  constructor() {
    console.log("TodoService Cargado");
    this._dato = new Todo("Valor");
  }


  get dato(): Todo {
    return this._dato;
  }

  set dato(value: Todo) {
    this._dato = value;
  }
}
