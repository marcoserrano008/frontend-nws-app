import { TestBed } from '@angular/core/testing';

import { NwsSystemUiService } from './nws-system-ui.service';

describe('NwsSystemUiService', () => {
  let service: NwsSystemUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NwsSystemUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
