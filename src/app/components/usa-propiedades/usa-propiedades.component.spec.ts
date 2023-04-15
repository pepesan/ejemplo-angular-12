import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaPropiedadesComponent } from './usa-propiedades.component';

describe('UsaPropiedadesComponent', () => {
  let component: UsaPropiedadesComponent;
  let fixture: ComponentFixture<UsaPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaPropiedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
