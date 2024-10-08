import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsNewPostsAlertComponent } from './nws-new-posts-alert.component';

describe('NwsNewPostsAlertComponent', () => {
  let component: NwsNewPostsAlertComponent;
  let fixture: ComponentFixture<NwsNewPostsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsNewPostsAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsNewPostsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
