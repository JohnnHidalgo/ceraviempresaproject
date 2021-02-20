import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtrabajadorgrupotrabajoComponent } from './listtrabajadorgrupotrabajo.component';

describe('ListtrabajadorgrupotrabajoComponent', () => {
  let component: ListtrabajadorgrupotrabajoComponent;
  let fixture: ComponentFixture<ListtrabajadorgrupotrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtrabajadorgrupotrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtrabajadorgrupotrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
