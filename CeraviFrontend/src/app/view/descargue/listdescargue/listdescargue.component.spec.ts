import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdescargueComponent } from './listdescargue.component';

describe('ListdescargueComponent', () => {
  let component: ListdescargueComponent;
  let fixture: ComponentFixture<ListdescargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdescargueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdescargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
