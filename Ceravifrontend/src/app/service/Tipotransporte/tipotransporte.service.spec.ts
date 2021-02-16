import { TestBed } from '@angular/core/testing';

import { TipotransporteService } from './tipotransporte.service';

describe('TipotransporteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipotransporteService = TestBed.get(TipotransporteService);
    expect(service).toBeTruthy();
  });
});
