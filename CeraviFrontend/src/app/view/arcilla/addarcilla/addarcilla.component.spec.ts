import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarcillaComponent } from './addarcilla.component';

describe('AddarcillaComponent', () => {
  let component: AddarcillaComponent;
  let fixture: ComponentFixture<AddarcillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddarcillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarcillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
