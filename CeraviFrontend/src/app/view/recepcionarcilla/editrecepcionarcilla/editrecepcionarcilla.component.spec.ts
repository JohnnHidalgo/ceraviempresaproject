import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecepcionarcillaComponent } from './editrecepcionarcilla.component';

describe('EditrecepcionarcillaComponent', () => {
  let component: EditrecepcionarcillaComponent;
  let fixture: ComponentFixture<EditrecepcionarcillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrecepcionarcillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrecepcionarcillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
