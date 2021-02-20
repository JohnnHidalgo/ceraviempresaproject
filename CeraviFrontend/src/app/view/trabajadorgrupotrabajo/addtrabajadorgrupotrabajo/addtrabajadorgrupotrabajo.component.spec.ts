import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrabajadorgrupotrabajoComponent } from './addtrabajadorgrupotrabajo.component';

describe('AddtrabajadorgrupotrabajoComponent', () => {
  let component: AddtrabajadorgrupotrabajoComponent;
  let fixture: ComponentFixture<AddtrabajadorgrupotrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtrabajadorgrupotrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrabajadorgrupotrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
