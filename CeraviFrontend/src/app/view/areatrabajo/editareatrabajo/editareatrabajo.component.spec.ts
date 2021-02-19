import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditareatrabajoComponent } from './editareatrabajo.component';

describe('EditareatrabajoComponent', () => {
  let component: EditareatrabajoComponent;
  let fixture: ComponentFixture<EditareatrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditareatrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditareatrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
