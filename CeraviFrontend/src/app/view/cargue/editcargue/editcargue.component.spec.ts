import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcargueComponent } from './editcargue.component';

describe('EditcargueComponent', () => {
  let component: EditcargueComponent;
  let fixture: ComponentFixture<EditcargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcargueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
