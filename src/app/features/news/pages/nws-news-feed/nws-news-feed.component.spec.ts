import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsNewsFeedComponent } from './nws-news-feed.component';

describe('NwsNewsFeedComponent', () => {
  let component: NwsNewsFeedComponent;
  let fixture: ComponentFixture<NwsNewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsNewsFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
