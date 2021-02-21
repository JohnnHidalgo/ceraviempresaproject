import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecepcionarcillaComponent } from './addrecepcionarcilla.component';

describe('AddrecepcionarcillaComponent', () => {
  let component: AddrecepcionarcillaComponent;
  let fixture: ComponentFixture<AddrecepcionarcillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrecepcionarcillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecepcionarcillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
