import { TestBed } from '@angular/core/testing';

import { SmijerService } from './smijer.service';

describe('SmijerService', () => {
  let service: SmijerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmijerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
