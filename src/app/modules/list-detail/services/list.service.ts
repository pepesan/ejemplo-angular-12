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
}
