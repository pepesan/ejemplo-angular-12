import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.sass']
})
export class FormBasicoComponent implements OnInit {

  public name: FormControl;

  constructor() {
    this.name = new FormControl('');
  }

  ngOnInit(): void {
  }

  mostrar() {
    console.log(this.name.value);
  }

  cambia() {
    this.name.setValue("Cambiado")
  }
}
