import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCierreMembresiaFormComponent } from './registro-cierre-membresia-form.component';

describe('RegistroCierreMembresiaFormComponent', () => {
  let component: RegistroCierreMembresiaFormComponent;
  let fixture: ComponentFixture<RegistroCierreMembresiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCierreMembresiaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCierreMembresiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
