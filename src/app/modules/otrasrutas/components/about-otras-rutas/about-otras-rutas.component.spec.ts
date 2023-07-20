import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOtrasRutasComponent } from './about-otras-rutas.component';

describe('AboutOtrasRutasComponent', () => {
  let component: AboutOtrasRutasComponent;
  let fixture: ComponentFixture<AboutOtrasRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutOtrasRutasComponent]
    });
    fixture = TestBed.createComponent(AboutOtrasRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
