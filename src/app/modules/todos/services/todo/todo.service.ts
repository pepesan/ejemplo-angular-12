import { Injectable } from '@angular/core';
import {Dato} from "../../domain/dato";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private dato: Dato;
  constructor() {
    console.log('TodoService inicializado...');
    this.dato = new Dato("");
  }

  cogeDatos(): Dato{
    return this.dato;
  }
}
