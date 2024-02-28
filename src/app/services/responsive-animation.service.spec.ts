import { TestBed } from '@angular/core/testing';

import { ResponsiveAnimationService } from './responsive-animation.service';

describe('ResponsiveAnimationService', () => {
  let service: ResponsiveAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
