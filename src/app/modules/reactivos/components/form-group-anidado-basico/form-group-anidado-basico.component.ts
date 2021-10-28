import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-group-anidado-basico',
  templateUrl: './form-group-anidado-basico.component.html',
  styleUrls: ['./form-group-anidado-basico.component.sass']
})
export class FormGroupAnidadoBasicoComponent implements OnInit {

  public profileForm: FormGroup;

  constructor() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.log(this.profileForm);
  }

  cambia() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
    console.log(this.profileForm);
  }
}
