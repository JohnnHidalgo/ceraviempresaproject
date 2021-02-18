import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcillaComponent } from './editarcilla.component';

describe('EditarcillaComponent', () => {
  let component: EditarcillaComponent;
  let fixture: ComponentFixture<EditarcillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
