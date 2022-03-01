import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madre',
  templateUrl: './madre.component.html',
  styleUrls: ['./madre.component.sass']
})
export class MadreComponent implements OnInit {

  public valor: string;
  public valorImprimible: string;
  constructor() { 
    this.valor ="Valor inicial";
    this.valorImprimible = "";
  }

  ngOnInit(): void {
  }
  manejaEvento(datoEnviado: string): void{
    this.valorImprimible = datoEnviado;
  }

}
