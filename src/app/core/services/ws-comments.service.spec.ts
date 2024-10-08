import { TestBed } from '@angular/core/testing';

import { WsCommentsService } from './ws-comments.service';

describe('WsCommentsService', () => {
  let service: WsCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
