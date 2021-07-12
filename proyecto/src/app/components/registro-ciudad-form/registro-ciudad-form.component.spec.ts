import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCiudadFormComponent } from './registro-ciudad-form.component';

describe('RegistroCiudadFormComponent', () => {
  let component: RegistroCiudadFormComponent;
  let fixture: ComponentFixture<RegistroCiudadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCiudadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCiudadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
