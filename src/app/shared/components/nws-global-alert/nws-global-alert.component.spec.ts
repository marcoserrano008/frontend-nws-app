import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsGlobalAlertComponent } from './nws-global-alert.component';

describe('NwsGlobalAlertComponent', () => {
  let component: NwsGlobalAlertComponent;
  let fixture: ComponentFixture<NwsGlobalAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsGlobalAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsGlobalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
