import { TestBed } from '@angular/core/testing';

import { ValuesService } from './values.service';

describe('ValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValuesService = TestBed.get(ValuesService);
    expect(service).toBeTruthy();
  });
});
