import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadreComponent } from './madre.component';

describe('MadreComponent', () => {
  let component: MadreComponent;
  let fixture: ComponentFixture<MadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
