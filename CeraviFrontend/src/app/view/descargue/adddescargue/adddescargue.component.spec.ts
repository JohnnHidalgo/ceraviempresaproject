import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddescargueComponent } from './adddescargue.component';

describe('AdddescargueComponent', () => {
  let component: AdddescargueComponent;
  let fixture: ComponentFixture<AdddescargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddescargueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddescargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
