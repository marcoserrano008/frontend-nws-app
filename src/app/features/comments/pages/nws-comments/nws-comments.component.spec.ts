import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsCommentsComponent } from './nws-comments.component';

describe('NwsCommentsComponent', () => {
  let component: NwsCommentsComponent;
  let fixture: ComponentFixture<NwsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
