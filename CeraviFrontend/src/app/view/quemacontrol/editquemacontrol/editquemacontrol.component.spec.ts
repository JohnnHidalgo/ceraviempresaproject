import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditquemacontrolComponent } from './editquemacontrol.component';

describe('EditquemacontrolComponent', () => {
  let component: EditquemacontrolComponent;
  let fixture: ComponentFixture<EditquemacontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditquemacontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditquemacontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
