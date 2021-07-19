import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroContactosClubesComponent } from './registro-contactos-clubes.component';

describe('RegistroContactosClubesComponent', () => {
  let component: RegistroContactosClubesComponent;
  let fixture: ComponentFixture<RegistroContactosClubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroContactosClubesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroContactosClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
