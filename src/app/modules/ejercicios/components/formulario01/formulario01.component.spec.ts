import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario01Component } from './formulario01.component';

describe('Formulario01Component', () => {
  let component: Formulario01Component;
  let fixture: ComponentFixture<Formulario01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formulario01Component]
    });
    fixture = TestBed.createComponent(Formulario01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
