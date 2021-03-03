import { TestBed } from '@angular/core/testing';

import { QuemaService } from './quema.service';

describe('QuemaService', () => {
  let service: QuemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
