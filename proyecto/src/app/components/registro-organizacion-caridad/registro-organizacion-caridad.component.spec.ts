import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOrganizacionCaridadComponent } from './registro-organizacion-caridad.component';

describe('RegistroOrganizacionCaridadComponent', () => {
  let component: RegistroOrganizacionCaridadComponent;
  let fixture: ComponentFixture<RegistroOrganizacionCaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroOrganizacionCaridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroOrganizacionCaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
