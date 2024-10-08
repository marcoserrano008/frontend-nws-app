import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsUserDetailComponent } from './nws-user-detail.component';

describe('NwsUserDetailComponent', () => {
  let component: NwsUserDetailComponent;
  let fixture: ComponentFixture<NwsUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
