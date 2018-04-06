import { TestBed, inject } from '@angular/core/testing';

import { SlabService } from './slab.service';

describe('SlabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlabService]
    });
  });

  it('should be created', inject([SlabService], (service: SlabService) => {
    expect(service).toBeTruthy();
  }));
});
