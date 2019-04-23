import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadlinkComponent } from './downloadlink.component';

describe('DownloadlinkComponent', () => {
  let component: DownloadlinkComponent;
  let fixture: ComponentFixture<DownloadlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
