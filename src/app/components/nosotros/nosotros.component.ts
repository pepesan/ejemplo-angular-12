import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.sass']
})
export class NosotrosComponent implements OnInit {
  atributo: string;

  constructor() {
    this.atributo = "Valor";
  }

  ngOnInit(): void {
  }

}
