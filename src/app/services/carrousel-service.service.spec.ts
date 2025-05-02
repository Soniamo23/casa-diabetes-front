import { TestBed } from '@angular/core/testing';

import { CarrouselServiceService } from './carrousel-service.service';

describe('CarrouselServiceService', () => {
  let service: CarrouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
