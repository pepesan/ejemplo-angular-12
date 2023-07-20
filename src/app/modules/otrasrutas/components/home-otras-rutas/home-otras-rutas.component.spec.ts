import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOtrasRutasComponent } from './home-otras-rutas.component';

describe('HomeOtrasRutasComponent', () => {
  let component: HomeOtrasRutasComponent;
  let fixture: ComponentFixture<HomeOtrasRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOtrasRutasComponent]
    });
    fixture = TestBed.createComponent(HomeOtrasRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
