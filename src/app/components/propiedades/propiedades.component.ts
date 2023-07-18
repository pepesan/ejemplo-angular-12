import {Component, Input} from '@angular/core';
import {Dato} from "./dato";

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.sass']
})
export class PropiedadesComponent {

  @Input() parametro?: string;
  @Input() parametro2?: number;
  @Input() dato?: Dato;
 }
