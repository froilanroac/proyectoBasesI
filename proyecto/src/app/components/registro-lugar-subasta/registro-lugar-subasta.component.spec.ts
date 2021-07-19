import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLugarSubastaComponent } from './registro-lugar-subasta.component';

describe('RegistroLugarSubastaComponent', () => {
  let component: RegistroLugarSubastaComponent;
  let fixture: ComponentFixture<RegistroLugarSubastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroLugarSubastaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLugarSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
