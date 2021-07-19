import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSubastaComponent } from './registro-subasta.component';

describe('RegistroSubastaComponent', () => {
  let component: RegistroSubastaComponent;
  let fixture: ComponentFixture<RegistroSubastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSubastaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
