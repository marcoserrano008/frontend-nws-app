import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsSearchPostsComponent } from './nws-search-posts.component';

describe('NwsSearchPostsComponent', () => {
  let component: NwsSearchPostsComponent;
  let fixture: ComponentFixture<NwsSearchPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsSearchPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsSearchPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
