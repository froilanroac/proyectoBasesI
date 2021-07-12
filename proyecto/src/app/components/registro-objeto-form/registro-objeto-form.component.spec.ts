import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroObjetoFormComponent } from './registro-objeto-form.component';

describe('RegistroObjetoFormComponent', () => {
  let component: RegistroObjetoFormComponent;
  let fixture: ComponentFixture<RegistroObjetoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroObjetoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroObjetoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
