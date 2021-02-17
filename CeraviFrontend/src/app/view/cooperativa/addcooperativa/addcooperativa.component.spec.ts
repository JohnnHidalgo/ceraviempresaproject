import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcooperativaComponent } from './addcooperativa.component';

describe('AddcooperativaComponent', () => {
  let component: AddcooperativaComponent;
  let fixture: ComponentFixture<AddcooperativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcooperativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcooperativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
