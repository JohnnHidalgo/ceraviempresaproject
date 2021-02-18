import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhornoComponent } from './addhorno.component';

describe('AddhornoComponent', () => {
  let component: AddhornoComponent;
  let fixture: ComponentFixture<AddhornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhornoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
