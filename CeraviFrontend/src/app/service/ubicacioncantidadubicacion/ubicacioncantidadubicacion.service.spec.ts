import { TestBed } from '@angular/core/testing';

import { UbicacioncantidadubicacionService } from './ubicacioncantidadubicacion.service';

describe('UbicacioncantidadubicacionService', () => {
  let service: UbicacioncantidadubicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicacioncantidadubicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
