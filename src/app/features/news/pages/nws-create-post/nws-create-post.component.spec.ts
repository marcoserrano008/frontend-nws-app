import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsCreatePostComponent } from './nws-create-post.component';

describe('NwsCreatePostComponent', () => {
  let component: NwsCreatePostComponent;
  let fixture: ComponentFixture<NwsCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsCreatePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
