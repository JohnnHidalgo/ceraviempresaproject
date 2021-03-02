import { TestBed } from '@angular/core/testing';

import { CargueService } from './cargue.service';

describe('CargueService', () => {
  let service: CargueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
