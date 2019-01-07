import { TestBed } from '@angular/core/testing';

import { RazaRestService } from './raza-rest.service';

describe('RazaRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RazaRestService = TestBed.get(RazaRestService);
    expect(service).toBeTruthy();
  });
});
