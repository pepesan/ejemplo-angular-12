import { Component, OnInit } from '@angular/core';
import {FormControl, UntypedFormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.sass']
})
export class FormBasicoComponent implements OnInit {

  public name: UntypedFormControl;
  public nameString: FormControl<string | null>;
  constructor() {
    this.name = new UntypedFormControl('');
    this.nameString = new FormControl('', [Validators.required]);
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
