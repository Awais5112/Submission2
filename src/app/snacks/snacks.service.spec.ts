import { TestBed } from '@angular/core/testing';

import { SnacksService } from './snacks.service';

describe('SnacksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnacksService = TestBed.get(SnacksService);
    expect(service).toBeTruthy();
  });
});
