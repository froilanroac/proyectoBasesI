import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSubastasComponentComponent } from './registro-subastas-component.component';

describe('RegistroSubastasComponentComponent', () => {
  let component: RegistroSubastasComponentComponent;
  let fixture: ComponentFixture<RegistroSubastasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSubastasComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSubastasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
