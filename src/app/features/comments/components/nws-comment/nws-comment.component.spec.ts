import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsCommentComponent } from './nws-comment.component';

describe('NwsCommentComponent', () => {
  let component: NwsCommentComponent;
  let fixture: ComponentFixture<NwsCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
