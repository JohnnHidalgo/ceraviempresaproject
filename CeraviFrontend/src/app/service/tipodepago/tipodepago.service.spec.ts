import { TestBed } from '@angular/core/testing';

import { TipodepagoService } from './tipodepago.service';

describe('TipodepagoService', () => {
  let service: TipodepagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipodepagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
