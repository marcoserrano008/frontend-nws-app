import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsFloatingMenuComponent } from './nws-floating-menu.component';

describe('NwsFloatingMenuComponent', () => {
  let component: NwsFloatingMenuComponent;
  let fixture: ComponentFixture<NwsFloatingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsFloatingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsFloatingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
