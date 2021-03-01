import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmoldeadoComponent } from './editmoldeado.component';

describe('EditmoldeadoComponent', () => {
  let component: EditmoldeadoComponent;
  let fixture: ComponentFixture<EditmoldeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmoldeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmoldeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
