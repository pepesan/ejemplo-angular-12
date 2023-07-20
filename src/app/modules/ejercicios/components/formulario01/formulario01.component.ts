import {Component, OnInit} from '@angular/core';
import {Datos} from "./datos";

/*
Coloca un formulario de registro típico: nombre de usuario, contraseña,
repite contraseña, email, género (radios buttons), orientación sexual (select),
tipo de relación buscada (select), condiciones de uso (checkbox) y botón enviar

Ejercicio 4:

Los siguientes campos son obligatorios: nombre de usuario, contraseña, repite contraseña, email.

Ejercicio 5:

Las condiciones de uso son obligatorias y el botón de enviar sólo debe estar habilitado en el caso de aceptarlas.

Ejercicio 6:

Si no se han aceptado las condiciones de uso deben visualizarse por pantalla

Ejercicio 7:

El campo género, debe tener los siguientes valores: hombre, mujer y otro. Dependiendo del valor seleccionado, debe aparecer una imagen representativa del género

Ejercicio 8:

Para rellenar la orientación sexual, se utilizará el *ngfor debe utilizarse un listado dinámico de datos del modelo

Ejercicio 9:

Ponerlo bonito con Bootstrap
 */

@Component({
  selector: 'app-formulario01',
  templateUrl: './formulario01.component.html',
  styleUrls: ['./formulario01.component.sass']
})
export class Formulario01Component implements OnInit{
  public model: Datos;
  public orientations: string[]=['hetero', 'homo', 'bi', 'pan', 'queer']
  public relTypes: string[]=['estable', 'esporádica']

  constructor() {
    this.model = new Datos();
  }


  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.model);
    this.model = new Datos();
  }


}
