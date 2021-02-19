import { TestBed } from '@angular/core/testing';

import { GrupotrabajoService } from './grupotrabajo.service';

describe('GrupotrabajoService', () => {
  let service: GrupotrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupotrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
