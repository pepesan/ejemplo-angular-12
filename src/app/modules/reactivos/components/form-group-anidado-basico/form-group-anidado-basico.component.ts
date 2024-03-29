import { Component, OnInit } from '@angular/core';
import {FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-group-anidado-basico',
  templateUrl: './form-group-anidado-basico.component.html',
  styleUrls: ['./form-group-anidado-basico.component.sass']
})
export class FormGroupAnidadoBasicoComponent implements OnInit {

  public profileForm: UntypedFormGroup;
  //public typedProfileForm: FormGroup;

  constructor() {
    this.profileForm = new UntypedFormGroup({
      firstName: new UntypedFormControl('',[Validators.required,Validators.minLength(4)]),
      lastName: new UntypedFormControl(''),
      address: new UntypedFormGroup({
        street: new UntypedFormControl(''),
        city: new UntypedFormControl(''),
        state: new UntypedFormControl(''),
        zip: new UntypedFormControl('')
      })
    });
    // this.typedProfileForm = new FormGroup({
    //   firstName: new UntypedFormControl(''),
    //   lastName: new UntypedFormControl(''),
    //   address: new UntypedFormGroup({
    //     street: new UntypedFormControl(''),
    //     city: new UntypedFormControl(''),
    //     state: new UntypedFormControl(''),
    //     zip: new UntypedFormControl('')
    //   })
    // });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.warn(this.profileForm.value?.firstname);
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
