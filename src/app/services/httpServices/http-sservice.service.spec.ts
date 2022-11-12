import { TestBed } from '@angular/core/testing';

import { HttpSServiceService } from './http-sservice.service';

describe('HttpSServiceService', () => {
  let service: HttpSServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
