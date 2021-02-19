import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddareatrabajoComponent } from './addareatrabajo.component';

describe('AddareatrabajoComponent', () => {
  let component: AddareatrabajoComponent;
  let fixture: ComponentFixture<AddareatrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddareatrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddareatrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
