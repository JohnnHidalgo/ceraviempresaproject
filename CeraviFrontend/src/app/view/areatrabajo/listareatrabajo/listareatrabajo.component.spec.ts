import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListareatrabajoComponent } from './listareatrabajo.component';

describe('ListareatrabajoComponent', () => {
  let component: ListareatrabajoComponent;
  let fixture: ComponentFixture<ListareatrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListareatrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListareatrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
