import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubrutasComponent } from './subrutas.component';

describe('SubrutasComponent', () => {
  let component: SubrutasComponent;
  let fixture: ComponentFixture<SubrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubrutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
