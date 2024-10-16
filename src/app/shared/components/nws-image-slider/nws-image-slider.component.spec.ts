import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsImageSliderComponent } from './nws-image-slider.component';

describe('NwsImageSliderComponent', () => {
  let component: NwsImageSliderComponent;
  let fixture: ComponentFixture<NwsImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsImageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
