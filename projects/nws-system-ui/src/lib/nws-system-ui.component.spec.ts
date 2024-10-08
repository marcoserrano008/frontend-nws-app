import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsSystemUiComponent } from './nws-system-ui.component';

describe('NwsSystemUiComponent', () => {
  let component: NwsSystemUiComponent;
  let fixture: ComponentFixture<NwsSystemUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsSystemUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsSystemUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
