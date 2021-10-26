import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-eventos',
  templateUrl: './principal-eventos.component.html',
  styleUrls: ['./principal-eventos.component.sass']
})
export class PrincipalEventosComponent implements OnInit {

  public value: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  clicked(event: Event) {
    event.preventDefault();
    console.log(event);
    console.log("pulsado");
  }

  onEnter(value: string) {
    this.value = value;
    console.log(this.value);
  }
}
