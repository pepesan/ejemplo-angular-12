import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderBasicoComponent } from './form-builder-basico.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

describe('FormBuilderBasicoComponent', () => {
  let component: FormBuilderBasicoComponent;
  let fixture: ComponentFixture<FormBuilderBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderBasicoComponent ],
      imports: [
      CommonModule,
      ReactiveFormsModule
     ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
