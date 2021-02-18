import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcillaComponent } from './listarcilla.component';

describe('ListarcillaComponent', () => {
  let component: ListarcillaComponent;
  let fixture: ComponentFixture<ListarcillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
