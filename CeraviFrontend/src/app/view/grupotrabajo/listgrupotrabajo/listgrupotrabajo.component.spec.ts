import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgrupotrabajoComponent } from './listgrupotrabajo.component';

describe('ListgrupotrabajoComponent', () => {
  let component: ListgrupotrabajoComponent;
  let fixture: ComponentFixture<ListgrupotrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListgrupotrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgrupotrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
