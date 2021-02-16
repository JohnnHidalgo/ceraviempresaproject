import { TestBed } from '@angular/core/testing';

import { CooperativaService } from './cooperativa.service';

describe('CooperativaService', () => {
  let service: CooperativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
