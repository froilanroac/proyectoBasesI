import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClubFormComponent } from './registro-club-form.component';

describe('RegistroClubFormComponent', () => {
  let component: RegistroClubFormComponent;
  let fixture: ComponentFixture<RegistroClubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroClubFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroClubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
