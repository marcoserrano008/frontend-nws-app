import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsFileInfoComponent } from './nws-file-info.component';

describe('NwsFileInfoComponent', () => {
  let component: NwsFileInfoComponent;
  let fixture: ComponentFixture<NwsFileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsFileInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsFileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
