import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditubicacionComponent } from './editubicacion.component';

describe('EditubicacionComponent', () => {
  let component: EditubicacionComponent;
  let fixture: ComponentFixture<EditubicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditubicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditubicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
