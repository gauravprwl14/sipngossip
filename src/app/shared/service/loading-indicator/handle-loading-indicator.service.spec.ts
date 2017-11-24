import { TestBed, inject } from '@angular/core/testing';

import { HandleLoadingIndicatorService } from './handle-loading-indicator.service';

describe('HandleLoadingIndicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleLoadingIndicatorService]
    });
  });

  it('should be created', inject([HandleLoadingIndicatorService], (service: HandleLoadingIndicatorService) => {
    expect(service).toBeTruthy();
  }));
});
