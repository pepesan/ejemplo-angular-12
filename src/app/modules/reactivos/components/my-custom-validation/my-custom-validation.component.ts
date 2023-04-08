import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ForbiddenNameValidator} from "../../forbidden-name.directive";

@Component({
  selector: 'app-my-custom-validation',
  templateUrl: './my-custom-validation.component.html',
  styleUrls: ['./my-custom-validation.component.sass']
})
export class MyCustomValidationComponent implements OnInit {
  public profileForm: UntypedFormGroup;
  constructor() {
    this.profileForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        ForbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  muestra() {
    //console.log(this.profileForm.controls['firstName']);
    //console.log(this.profileForm.get('firstName'));
    console.log(this.profileForm.controls['name']?.errors);
    console.log(this.profileForm.controls['name'].errors?.name);

  }
}
