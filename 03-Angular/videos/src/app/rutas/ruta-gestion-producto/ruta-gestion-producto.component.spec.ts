import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionProductoComponent } from './ruta-gestion-producto.component';

describe('RutaGestionProductoComponent', () => {
  let component: RutaGestionProductoComponent;
  let fixture: ComponentFixture<RutaGestionProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
