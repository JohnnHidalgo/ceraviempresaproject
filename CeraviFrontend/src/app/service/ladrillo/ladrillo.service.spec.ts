import { TestBed } from '@angular/core/testing';

import { LadrilloService } from './ladrillo.service';

describe('LadrilloService', () => {
  let service: LadrilloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LadrilloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
