import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelogdialogComponent } from './deletelogdialog.component';

describe('DeletelogdialogComponent', () => {
  let component: DeletelogdialogComponent;
  let fixture: ComponentFixture<DeletelogdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletelogdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelogdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
