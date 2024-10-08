import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsTextareaComponent } from './nws-textarea.component';

describe('NwsTextareaComponent', () => {
  let component: NwsTextareaComponent;
  let fixture: ComponentFixture<NwsTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
