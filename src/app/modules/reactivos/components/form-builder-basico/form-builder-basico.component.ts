import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-form-builder-basico',
  templateUrl: './form-builder-basico.component.html',
  styleUrls: ['./form-builder-basico.component.sass']
})
export class FormBuilderBasicoComponent implements OnInit {

  public profileForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
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
    // lo marcamos como no tocado
    this.profileForm.markAsUntouched();
    // lo marcamos como prístino
    this.profileForm.markAsPristine();
  }

  ngOnInit(): void {
  }

  cambia() {

  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.log(this.profileForm);
    // reseteamos los datos
    this.profileForm.reset();
    // lo marcamos como no tocado
    this.profileForm.markAsUntouched();
    // lo marcamos como prístino
    this.profileForm.markAsPristine();
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
