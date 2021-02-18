import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListladrilloComponent } from './listladrillo.component';

describe('ListladrilloComponent', () => {
  let component: ListladrilloComponent;
  let fixture: ComponentFixture<ListladrilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListladrilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListladrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
