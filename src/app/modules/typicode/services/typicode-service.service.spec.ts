import { TestBed } from '@angular/core/testing';

import {TypicodeService} from "./typicode-service.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('TypicodeService', () => {
  let service: TypicodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers:[
        HttpClient
      ]
    });
    service = TestBed.inject(TypicodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
