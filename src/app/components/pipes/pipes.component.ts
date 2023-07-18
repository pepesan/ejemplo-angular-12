import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent {

  cadena: string = "Hola";

  objeto: any = {
    "prop": "value"
  };

  porcentaje :number = 0.1257;
  fecha: Date = new Date();
  // fecha: Date = new Date(2023, 6, 15, 12, 30, 15);
  numero: number = 2;
}
