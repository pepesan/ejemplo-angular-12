import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-form-builder-basico',
  templateUrl: './form-builder-basico.component.html',
  styleUrls: ['./form-builder-basico.component.sass']
})
export class FormBuilderBasicoComponent implements OnInit {

  public profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm= this.fb.group({
      firstName: [
        '',
        [Validators.required,Validators.minLength(4)]
      ],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }

  ngOnInit(): void {
  }

  cambia() {

  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.log(this.profileForm);
  }

  muestra() {
    //console.log(this.profileForm.controls['firstName']);
    //console.log(this.profileForm.get('firstName'));
    console.log(this.profileForm.controls['firstName']?.errors);
    if(this.profileForm.controls['firstName'].errors!= null){
      console.log(this.profileForm.controls['firstName'].errors['required']);
    }
  }
}
