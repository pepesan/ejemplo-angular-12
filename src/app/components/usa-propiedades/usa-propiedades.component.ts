import { Component } from '@angular/core';
import {Dato} from "../propiedades/dato";

@Component({
  selector: 'app-usa-propiedades',
  templateUrl: './usa-propiedades.component.html',
  styleUrls: ['./usa-propiedades.component.sass']
})
export class UsaPropiedadesComponent {
  valor: string = "Valor"
  dato: Dato = new Dato();
}
