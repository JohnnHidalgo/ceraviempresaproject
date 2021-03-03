import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquemacontrolComponent } from './listquemacontrol.component';

describe('ListquemacontrolComponent', () => {
  let component: ListquemacontrolComponent;
  let fixture: ComponentFixture<ListquemacontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListquemacontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquemacontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
