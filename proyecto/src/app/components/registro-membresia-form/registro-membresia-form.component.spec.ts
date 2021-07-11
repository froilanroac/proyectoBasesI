import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMembresiaFormComponent } from './registro-membresia-form.component';

describe('RegistroMembresiaFormComponent', () => {
  let component: RegistroMembresiaFormComponent;
  let fixture: ComponentFixture<RegistroMembresiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMembresiaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMembresiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
