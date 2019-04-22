import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleimgComponent } from './titleimg.component';

describe('TitleimgComponent', () => {
  let component: TitleimgComponent;
  let fixture: ComponentFixture<TitleimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
