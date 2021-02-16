import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittipotransporteComponent } from './edittipotransporte.component';

describe('EdittipotransporteComponent', () => {
  let component: EdittipotransporteComponent;
  let fixture: ComponentFixture<EdittipotransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittipotransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittipotransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
