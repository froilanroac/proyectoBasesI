import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroColeccionistaFormComponent } from './registro-coleccionista-form.component';

describe('RegistroColeccionistaFormComponent', () => {
  let component: RegistroColeccionistaFormComponent;
  let fixture: ComponentFixture<RegistroColeccionistaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroColeccionistaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroColeccionistaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
