import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsHeaderComponent } from './nws-header.component';

describe('NwsHeaderComponent', () => {
  let component: NwsHeaderComponent;
  let fixture: ComponentFixture<NwsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
