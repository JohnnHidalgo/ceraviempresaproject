import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithornoComponent } from './edithorno.component';

describe('EdithornoComponent', () => {
  let component: EdithornoComponent;
  let fixture: ComponentFixture<EdithornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithornoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
