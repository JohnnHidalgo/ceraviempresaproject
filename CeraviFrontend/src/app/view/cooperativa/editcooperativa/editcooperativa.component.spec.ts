import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcooperativaComponent } from './editcooperativa.component';

describe('EditcooperativaComponent', () => {
  let component: EditcooperativaComponent;
  let fixture: ComponentFixture<EditcooperativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcooperativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcooperativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
