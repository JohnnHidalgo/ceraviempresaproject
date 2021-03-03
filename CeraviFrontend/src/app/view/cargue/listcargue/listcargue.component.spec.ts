import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcargueComponent } from './listcargue.component';

describe('ListcargueComponent', () => {
  let component: ListcargueComponent;
  let fixture: ComponentFixture<ListcargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcargueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
