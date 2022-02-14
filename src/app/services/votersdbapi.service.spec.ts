import { TestBed } from '@angular/core/testing';

import { VotersdbapiService } from './votersdbapi.service';

describe('VotersdbapiService', () => {
  let service: VotersdbapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotersdbapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
