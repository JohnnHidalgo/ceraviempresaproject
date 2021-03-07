import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdescargueComponent } from './editdescargue.component';

describe('EditdescargueComponent', () => {
  let component: EditdescargueComponent;
  let fixture: ComponentFixture<EditdescargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdescargueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdescargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
