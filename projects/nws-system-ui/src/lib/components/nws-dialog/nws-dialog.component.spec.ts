import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsDialogComponent } from './nws-dialog.component';

describe('NwsDialogComponent', () => {
  let component: NwsDialogComponent;
  let fixture: ComponentFixture<NwsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
