import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgrupotrabajoComponent } from './editgrupotrabajo.component';

describe('EditgrupotrabajoComponent', () => {
  let component: EditgrupotrabajoComponent;
  let fixture: ComponentFixture<EditgrupotrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditgrupotrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgrupotrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
