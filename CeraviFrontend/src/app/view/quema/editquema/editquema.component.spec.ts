import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditquemaComponent } from './editquema.component';

describe('EditquemaComponent', () => {
  let component: EditquemaComponent;
  let fixture: ComponentFixture<EditquemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditquemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditquemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
