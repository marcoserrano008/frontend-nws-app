import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsAvatarComponent } from './nws-avatar.component';

describe('NwsAvatarComponent', () => {
  let component: NwsAvatarComponent;
  let fixture: ComponentFixture<NwsAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
