import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsCreateCommentComponent } from './nws-create-comment.component';

describe('NwsCreateCommentComponent', () => {
  let component: NwsCreateCommentComponent;
  let fixture: ComponentFixture<NwsCreateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsCreateCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsCreateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
