import { TestBed } from '@angular/core/testing';

import { CropDataService } from './crop-data.service';

describe('CropDataService', () => {
  let service: CropDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
