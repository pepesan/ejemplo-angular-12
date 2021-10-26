import { TestBed } from '@angular/core/testing';

import { TypicodeServiceService } from './typicode-service.service';

describe('TypicodeServiceService', () => {
  let service: TypicodeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypicodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
