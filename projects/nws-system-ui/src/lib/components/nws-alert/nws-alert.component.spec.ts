import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsAlertComponent } from './nws-alert.component';

describe('NwsAlertComponent', () => {
  let component: NwsAlertComponent;
  let fixture: ComponentFixture<NwsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
