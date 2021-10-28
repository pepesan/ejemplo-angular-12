import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-group-basico',
  templateUrl: './form-group-basico.component.html',
  styleUrls: ['./form-group-basico.component.sass']
})
export class FormGroupBasicoComponent implements OnInit {
  public profileForm: FormGroup;

  constructor() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
