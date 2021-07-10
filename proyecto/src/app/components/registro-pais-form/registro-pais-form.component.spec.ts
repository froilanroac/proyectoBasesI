import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPaisFormComponent } from './registro-pais-form.component';

describe('RegistroPaisFormComponent', () => {
  let component: RegistroPaisFormComponent;
  let fixture: ComponentFixture<RegistroPaisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPaisFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
