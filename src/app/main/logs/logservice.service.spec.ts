import { TestBed } from '@angular/core/testing';

import { LogserviceService } from './logservice.service';

describe('LogserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogserviceService = TestBed.get(LogserviceService);
    expect(service).toBeTruthy();
  });
});
