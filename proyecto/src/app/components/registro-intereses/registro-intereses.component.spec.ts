import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInteresesComponent } from './registro-intereses.component';

describe('RegistroInteresesComponent', () => {
  let component: RegistroInteresesComponent;
  let fixture: ComponentFixture<RegistroInteresesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInteresesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInteresesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
