import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtipotransporteComponent } from './addtipotransporte.component';

describe('AddtipotransporteComponent', () => {
  let component: AddtipotransporteComponent;
  let fixture: ComponentFixture<AddtipotransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtipotransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtipotransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
