import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsInputComponent } from './nws-input.component';

describe('NwsInputComponent', () => {
  let component: NwsInputComponent;
  let fixture: ComponentFixture<NwsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
