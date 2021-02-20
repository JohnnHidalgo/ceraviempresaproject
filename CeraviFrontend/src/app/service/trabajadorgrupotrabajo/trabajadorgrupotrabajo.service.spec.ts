import { TestBed } from '@angular/core/testing';

import { TrabajadorgrupotrabajoService } from './trabajadorgrupotrabajo.service';

describe('TrabajadorgrupotrabajoService', () => {
  let service: TrabajadorgrupotrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajadorgrupotrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
