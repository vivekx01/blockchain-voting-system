import { TestBed } from '@angular/core/testing';

import { SmartcontractinteractionService } from './smartcontractinteraction.service';

describe('SmartcontractinteractionService', () => {
  let service: SmartcontractinteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartcontractinteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
