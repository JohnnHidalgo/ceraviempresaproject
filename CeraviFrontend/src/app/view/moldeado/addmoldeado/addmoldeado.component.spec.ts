import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoldeadoComponent } from './addmoldeado.component';

describe('AddmoldeadoComponent', () => {
  let component: AddmoldeadoComponent;
  let fixture: ComponentFixture<AddmoldeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoldeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoldeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
