import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsInformationComponent } from './nws-information.component';

describe('NwsInformationComponent', () => {
  let component: NwsInformationComponent;
  let fixture: ComponentFixture<NwsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
