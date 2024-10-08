import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsFileDetailComponent } from './nws-file-detail.component';

describe('NwsFileDetailComponent', () => {
  let component: NwsFileDetailComponent;
  let fixture: ComponentFixture<NwsFileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsFileDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsFileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
