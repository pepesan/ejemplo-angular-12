import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hija',
  templateUrl: './hija.component.html',
  styleUrls: ['./hija.component.sass']
})
export class HijaComponent implements OnInit {
  @Input() datoEntrada: string;
  @Output() public manejadorEvento: EventEmitter<string>;

  constructor() {
    this.datoEntrada = "";
    this.manejadorEvento = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }
  enviaEvento(): void
  {
    console.log("Enviando evento");
    this.manejadorEvento.emit("Valor Enviado en el evento");
  }

}
