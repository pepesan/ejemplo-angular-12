import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.sass']
})
export class PropiedadesComponent {

  @Input() parametro?: string;

}
