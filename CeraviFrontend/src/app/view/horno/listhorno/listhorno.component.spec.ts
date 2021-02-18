import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhornoComponent } from './listhorno.component';

describe('ListhornoComponent', () => {
  let component: ListhornoComponent;
  let fixture: ComponentFixture<ListhornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhornoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
