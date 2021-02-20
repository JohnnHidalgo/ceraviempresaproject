import { TestBed } from '@angular/core/testing';

import { RecepcionarcillaService } from './recepcionarcilla.service';

describe('RecepcionarcillaService', () => {
  let service: RecepcionarcillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepcionarcillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
