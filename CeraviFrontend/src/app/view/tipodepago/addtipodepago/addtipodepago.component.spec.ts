import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtipodepagoComponent } from './addtipodepago.component';

describe('AddtipodepagoComponent', () => {
  let component: AddtipodepagoComponent;
  let fixture: ComponentFixture<AddtipodepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtipodepagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtipodepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
