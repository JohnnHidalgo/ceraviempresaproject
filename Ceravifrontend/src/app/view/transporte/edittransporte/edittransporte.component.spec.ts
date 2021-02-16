import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittransporteComponent } from './edittransporte.component';

describe('EdittransporteComponent', () => {
  let component: EdittransporteComponent;
  let fixture: ComponentFixture<EdittransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
