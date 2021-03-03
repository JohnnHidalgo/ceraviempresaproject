import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcargueComponent } from './addcargue.component';

describe('AddcargueComponent', () => {
  let component: AddcargueComponent;
  let fixture: ComponentFixture<AddcargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcargueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
