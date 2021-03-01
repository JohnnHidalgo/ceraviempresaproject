import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmoldeadoComponent } from './listmoldeado.component';

describe('ListmoldeadoComponent', () => {
  let component: ListmoldeadoComponent;
  let fixture: ComponentFixture<ListmoldeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmoldeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmoldeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
