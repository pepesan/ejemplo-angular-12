import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicodeListComponent } from './typicode-list.component';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('TypicodeListComponent', () => {
  let component: TypicodeListComponent;
  let fixture: ComponentFixture<TypicodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypicodeListComponent ],
      imports: [
        CommonModule,
        HttpClientModule
      ],
      providers: [
        HttpClient
      ]
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
