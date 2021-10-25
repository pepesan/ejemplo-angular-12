import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private dato: any;
  constructor() {
    console.log('TodoService inicializado...');
    this.dato = {
      text: "valor"
    };
  }

  cogeDatos(): any{
    return this.dato;
  }
}
