import { TestBed } from '@angular/core/testing';

import { MoldeadoService } from './moldeado.service';

describe('MoldeadoService', () => {
  let service: MoldeadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoldeadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
