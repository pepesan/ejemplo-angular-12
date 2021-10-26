import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicodeListComponent } from './typicode-list.component';

describe('TypicodeListComponent', () => {
  let component: TypicodeListComponent;
  let fixture: ComponentFixture<TypicodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypicodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypicodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
