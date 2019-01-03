import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVerDetalleUsuarioComponent } from './ruta-ver-detalle-usuario.component';

describe('RutaVerDetalleUsuarioComponent', () => {
  let component: RutaVerDetalleUsuarioComponent;
  let fixture: ComponentFixture<RutaVerDetalleUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVerDetalleUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVerDetalleUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
