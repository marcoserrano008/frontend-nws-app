import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsLabelComponent } from './nws-label.component';

describe('NwsLabelComponent', () => {
  let component: NwsLabelComponent;
  let fixture: ComponentFixture<NwsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
