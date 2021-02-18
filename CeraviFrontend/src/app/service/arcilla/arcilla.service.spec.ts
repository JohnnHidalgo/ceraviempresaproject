import { TestBed } from '@angular/core/testing';

import { ArcillaService } from './arcilla.service';

describe('ArcillaService', () => {
  let service: ArcillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
