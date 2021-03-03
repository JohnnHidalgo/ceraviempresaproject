import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquemaComponent } from './listquema.component';

describe('ListquemaComponent', () => {
  let component: ListquemaComponent;
  let fixture: ComponentFixture<ListquemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListquemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
