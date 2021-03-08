import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtipodepagoComponent } from './listtipodepago.component';

describe('ListtipodepagoComponent', () => {
  let component: ListtipodepagoComponent;
  let fixture: ComponentFixture<ListtipodepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtipodepagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtipodepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
