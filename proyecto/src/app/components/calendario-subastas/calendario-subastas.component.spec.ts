import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioSubastasComponent } from './calendario-subastas.component';

describe('CalendarioSubastasComponent', () => {
  let component: CalendarioSubastasComponent;
  let fixture: ComponentFixture<CalendarioSubastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioSubastasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioSubastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
