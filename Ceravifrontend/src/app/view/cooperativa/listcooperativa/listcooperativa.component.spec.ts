import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcooperativaComponent } from './listcooperativa.component';

describe('ListcooperativaComponent', () => {
  let component: ListcooperativaComponent;
  let fixture: ComponentFixture<ListcooperativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcooperativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcooperativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
