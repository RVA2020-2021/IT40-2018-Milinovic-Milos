import { TestBed } from '@angular/core/testing';

import { GrupaService } from './grupa.service';

describe('GrupaService', () => {
  let service: GrupaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
