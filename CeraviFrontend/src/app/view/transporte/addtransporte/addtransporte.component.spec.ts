import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransporteComponent } from './addtransporte.component';

describe('AddtransporteComponent', () => {
  let component: AddtransporteComponent;
  let fixture: ComponentFixture<AddtransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
