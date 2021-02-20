import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgrupotrabajoComponent } from './addgrupotrabajo.component';

describe('AddgrupotrabajoComponent', () => {
  let component: AddgrupotrabajoComponent;
  let fixture: ComponentFixture<AddgrupotrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgrupotrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgrupotrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
