import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRutasComponent } from './listado-rutas.component';

describe('ListadoRutasComponent', () => {
  let component: ListadoRutasComponent;
  let fixture: ComponentFixture<ListadoRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
