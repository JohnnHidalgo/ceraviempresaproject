import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquemaComponent } from './addquema.component';

describe('AddquemaComponent', () => {
  let component: AddquemaComponent;
  let fixture: ComponentFixture<AddquemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
