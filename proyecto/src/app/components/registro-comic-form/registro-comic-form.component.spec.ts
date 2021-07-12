import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComicFormComponent } from './registro-comic-form.component';

describe('RegistroComicFormComponent', () => {
  let component: RegistroComicFormComponent;
  let fixture: ComponentFixture<RegistroComicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
