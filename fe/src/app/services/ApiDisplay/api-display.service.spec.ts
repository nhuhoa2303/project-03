import { TestBed } from '@angular/core/testing';

import { ApiDisplayService } from './api-display.service';

describe('ApiDisplayService', () => {
  let service: ApiDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
