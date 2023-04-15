import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.sass']
})
export class DirectivasComponent {
  booleano: boolean = true;

  datos: any []= [
    {"text": "valor 1"},
    {"text": "valor 2"},
    {"text": "valor 3"},
    {"text": "valor 4"},

  ];

  currentItem: string = "stout";

  isSpecial: boolean = true;

}
