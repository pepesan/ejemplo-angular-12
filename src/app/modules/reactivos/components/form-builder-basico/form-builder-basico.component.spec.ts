import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderBasicoComponent } from './form-builder-basico.component';

describe('FormBuilderBasicoComponent', () => {
  let component: FormBuilderBasicoComponent;
  let fixture: ComponentFixture<FormBuilderBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderBasicoComponent ]
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
