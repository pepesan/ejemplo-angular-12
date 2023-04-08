import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
@Component({
  selector: 'app-form-group-basico',
  templateUrl: './form-group-basico.component.html',
  styleUrls: ['./form-group-basico.component.sass']
})
export class FormGroupBasicoComponent implements OnInit {
  public profileForm: UntypedFormGroup;

  constructor() {
    this.profileForm = new UntypedFormGroup({
      firstName: new UntypedFormControl(''),
      lastName: new UntypedFormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
