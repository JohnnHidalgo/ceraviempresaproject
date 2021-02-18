import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListubicacionComponent } from './listubicacion.component';

describe('ListubicacionComponent', () => {
  let component: ListubicacionComponent;
  let fixture: ComponentFixture<ListubicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListubicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListubicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
