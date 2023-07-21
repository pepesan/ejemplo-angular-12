import { Injectable } from '@angular/core';
import {Dato} from "../classes/dato";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public datos: Dato[] = [];

  constructor() {
    this.datos.push(new Dato(1,"Blas"))
    this.datos.push(new Dato(2,"Loubna"))
  }

  getById(selectedId: number): Dato {
    console.log(this.datos)
    console.log("selectedId"+ selectedId)
    let dato = new Dato();
    for (let i =0; i< this.datos.length; i++) {
      console.log("i: "+i)
      console.log("this.datos[i].id: "+this.datos[i].id)
      if (this.datos[i].id==selectedId){
        console.log("service dato: "+this.datos[i].name);
        return this.datos[i];
      }
    }
    return new Dato();
  }

  add(dato: Dato) {
    this.datos.push(dato)

  }

  update(selectedId: number, dato: Dato){
    this.delete(selectedId);
    this.datos.push(dato)
  }
  delete(selectedId: number) {
    this.datos = this.datos.filter(objeto => objeto.id!== selectedId)
  }

  obtenerMaximoId(): number {
    const maxId = this.datos.reduce((max, objeto) => {
      return objeto.id > max ? objeto.id : max;
    }, 0);
    return maxId;
  }
}
