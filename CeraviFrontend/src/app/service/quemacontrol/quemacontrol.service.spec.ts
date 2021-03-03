import { TestBed } from '@angular/core/testing';

import { QuemacontrolService } from './quemacontrol.service';

describe('QuemacontrolService', () => {
  let service: QuemacontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuemacontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
