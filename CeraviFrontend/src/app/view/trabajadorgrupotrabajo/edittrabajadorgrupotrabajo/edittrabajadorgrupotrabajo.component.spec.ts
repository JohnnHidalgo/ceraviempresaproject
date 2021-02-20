import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittrabajadorgrupotrabajoComponent } from './edittrabajadorgrupotrabajo.component';

describe('EdittrabajadorgrupotrabajoComponent', () => {
  let component: EdittrabajadorgrupotrabajoComponent;
  let fixture: ComponentFixture<EdittrabajadorgrupotrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittrabajadorgrupotrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittrabajadorgrupotrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
