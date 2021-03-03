import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquemacontrolComponent } from './addquemacontrol.component';

describe('AddquemacontrolComponent', () => {
  let component: AddquemacontrolComponent;
  let fixture: ComponentFixture<AddquemacontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquemacontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquemacontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
