import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmoduloComponent } from './submodulo.component';

describe('SubmoduloComponent', () => {
  let component: SubmoduloComponent;
  let fixture: ComponentFixture<SubmoduloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmoduloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
