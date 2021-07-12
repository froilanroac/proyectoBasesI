import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRepresentanteFormComponent } from './registro-representante-form.component';

describe('RegistroRepresentanteFormComponent', () => {
  let component: RegistroRepresentanteFormComponent;
  let fixture: ComponentFixture<RegistroRepresentanteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroRepresentanteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroRepresentanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
