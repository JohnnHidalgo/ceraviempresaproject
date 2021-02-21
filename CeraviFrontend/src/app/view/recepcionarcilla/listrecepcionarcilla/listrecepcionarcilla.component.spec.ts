import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrecepcionarcillaComponent } from './listrecepcionarcilla.component';

describe('ListrecepcionarcillaComponent', () => {
  let component: ListrecepcionarcillaComponent;
  let fixture: ComponentFixture<ListrecepcionarcillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrecepcionarcillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrecepcionarcillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
