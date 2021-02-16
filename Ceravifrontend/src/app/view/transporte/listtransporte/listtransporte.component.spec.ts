import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtransporteComponent } from './listtransporte.component';

describe('ListtransporteComponent', () => {
  let component: ListtransporteComponent;
  let fixture: ComponentFixture<ListtransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
