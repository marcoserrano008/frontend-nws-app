import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsButtonComponent } from './nws-button.component';

describe('NwsButtonComponent', () => {
  let component: NwsButtonComponent;
  let fixture: ComponentFixture<NwsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
