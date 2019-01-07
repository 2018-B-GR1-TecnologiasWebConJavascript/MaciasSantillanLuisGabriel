import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearRazaComponent } from './ruta-crear-raza.component';

describe('RutaCrearRazaComponent', () => {
  let component: RutaCrearRazaComponent;
  let fixture: ComponentFixture<RutaCrearRazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearRazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
