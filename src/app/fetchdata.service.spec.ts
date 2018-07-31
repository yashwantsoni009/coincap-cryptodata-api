import { TestBed, inject } from '@angular/core/testing';

import { FetchdataService } from './fetchdata.service';

describe('FetchdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchdataService]
    });
  });

  it('should be created', inject([FetchdataService], (service: FetchdataService) => {
    expect(service).toBeTruthy();
  }));
});
