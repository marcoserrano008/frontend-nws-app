import { TestBed } from '@angular/core/testing';

import { WsBulletinsService } from './ws-bulletins.service';

describe('WsBulletinsService', () => {
  let service: WsBulletinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsBulletinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
