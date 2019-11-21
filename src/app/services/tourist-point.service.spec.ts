import { TestBed } from '@angular/core/testing';

import { TouristPointService } from './tourist-point.service';

describe('TouristPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristPointService = TestBed.get(TouristPointService);
    expect(service).toBeTruthy();
  });
});
