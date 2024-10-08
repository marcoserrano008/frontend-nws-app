import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsSignupComponent } from './nws-signup.component';

describe('NwsRegisterComponent', () => {
  let component: NwsSignupComponent;
  let fixture: ComponentFixture<NwsSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
