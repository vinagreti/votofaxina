import { TestBed, inject } from '@angular/core/testing';

import { PoliticService } from './politic.service';

describe('PoliticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliticService]
    });
  });

  it('should be created', inject([PoliticService], (service: PoliticService) => {
    expect(service).toBeTruthy();
  }));
});
