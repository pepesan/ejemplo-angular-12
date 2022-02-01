import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string;
  variable: string;
  subtitulo: string;

  constructor() {
    this.title = 'nombreProyecto';
    this.variable = 'Valor';
    this.subtitulo = "Mi Subtítulo";
  }

}
