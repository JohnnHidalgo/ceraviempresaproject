import { TestBed } from '@angular/core/testing';

import { CantidadubicacionService } from './cantidadubicacion.service';

describe('CantidadubicacionService', () => {
  let service: CantidadubicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantidadubicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
