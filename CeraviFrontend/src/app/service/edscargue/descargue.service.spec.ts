import { TestBed } from '@angular/core/testing';

import { DescargueService } from './descargue.service';

describe('DescargueService', () => {
  let service: DescargueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescargueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
