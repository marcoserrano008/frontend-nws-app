import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsLoginComponent } from './nws-login.component';

describe('NwsLoginComponent', () => {
  let component: NwsLoginComponent;
  let fixture: ComponentFixture<NwsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
