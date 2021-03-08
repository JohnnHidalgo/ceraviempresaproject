import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittipodepagoComponent } from './edittipodepago.component';

describe('EdittipodepagoComponent', () => {
  let component: EdittipodepagoComponent;
  let fixture: ComponentFixture<EdittipodepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittipodepagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittipodepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
