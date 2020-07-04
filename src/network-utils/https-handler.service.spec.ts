import { TestBed } from '@angular/core/testing';

import { HttpsHandlerService } from './https-handler.service';

describe('HttpsHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpsHandlerService = TestBed.get(HttpsHandlerService);
    expect(service).toBeTruthy();
  });
});
