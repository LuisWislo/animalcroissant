import { TestBed } from '@angular/core/testing';

import { VillagersService } from './villagers.service';

describe('VillagersService', () => {
  let service: VillagersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillagersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
