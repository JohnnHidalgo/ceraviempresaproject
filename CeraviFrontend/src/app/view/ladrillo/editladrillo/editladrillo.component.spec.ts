import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditladrilloComponent } from './editladrillo.component';

describe('EditladrilloComponent', () => {
  let component: EditladrilloComponent;
  let fixture: ComponentFixture<EditladrilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditladrilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditladrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
