import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-group-anidado-basico',
  templateUrl: './form-group-anidado-basico.component.html',
  styleUrls: ['./form-group-anidado-basico.component.sass']
})
export class FormGroupAnidadoBasicoComponent implements OnInit {

  public profileForm: UntypedFormGroup;

  constructor() {
    this.profileForm = new UntypedFormGroup({
      firstName: new UntypedFormControl(''),
      lastName: new UntypedFormControl(''),
      address: new UntypedFormGroup({
        street: new UntypedFormControl(''),
        city: new UntypedFormControl(''),
        state: new UntypedFormControl(''),
        zip: new UntypedFormControl('')
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
