import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddladrilloComponent } from './addladrillo.component';

describe('AddladrilloComponent', () => {
  let component: AddladrilloComponent;
  let fixture: ComponentFixture<AddladrilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddladrilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddladrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
