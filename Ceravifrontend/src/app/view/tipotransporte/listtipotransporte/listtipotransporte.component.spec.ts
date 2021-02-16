import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtipotransporteComponent } from './listtipotransporte.component';

describe('ListtipotransporteComponent', () => {
  let component: ListtipotransporteComponent;
  let fixture: ComponentFixture<ListtipotransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtipotransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtipotransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
