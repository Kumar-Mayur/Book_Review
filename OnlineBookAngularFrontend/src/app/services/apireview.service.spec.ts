import { TestBed } from '@angular/core/testing';

import { ApireviewService } from './apireview.service';

describe('ApireviewService', () => {
  let service: ApireviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApireviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
