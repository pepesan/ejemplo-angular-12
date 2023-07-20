import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivosComponent } from './reactivos.component';

describe('ReactivosComponent', () => {
  let component: ReactivosComponent;
  let fixture: ComponentFixture<ReactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivosComponent]
    });
    fixture = TestBed.createComponent(ReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
