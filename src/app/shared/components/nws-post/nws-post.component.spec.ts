import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsPostComponent } from './nws-post.component';

describe('NwsPostComponent', () => {
  let component: NwsPostComponent;
  let fixture: ComponentFixture<NwsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
