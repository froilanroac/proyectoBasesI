import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSimularComponent } from './lista-simular.component';

describe('ListaSimularComponent', () => {
  let component: ListaSimularComponent;
  let fixture: ComponentFixture<ListaSimularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSimularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSimularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
