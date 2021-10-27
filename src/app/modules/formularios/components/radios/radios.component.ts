import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.sass']
})
export class RadiosComponent implements OnInit {
  public opciones: any[] = [];

  constructor() {
    this.opciones.push({
      name: "Opción 1",
      id: "opcion-1",
      value: "option1",
      disabled: false,
      checked: true
    });
    this.opciones.push({
      name: "Opción 2",
      id: "opcion-2",
      value: "option2",
      disabled: false,
      checked: false
    });
    this.opciones.push({
      name: "Opción 3",
      id: "opcion-3",
      value: "option3",
      disabled: false,
      checked: false

    });

  }

  ngOnInit(): void {
  }

}
