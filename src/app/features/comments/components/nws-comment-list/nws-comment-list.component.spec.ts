import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsCommentListComponent } from './nws-comment-list.component';

describe('NwsCommentListComponent', () => {
  let component: NwsCommentListComponent;
  let fixture: ComponentFixture<NwsCommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsCommentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
