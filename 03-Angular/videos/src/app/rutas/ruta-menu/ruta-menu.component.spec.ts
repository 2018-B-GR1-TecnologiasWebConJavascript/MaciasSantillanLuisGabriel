import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMenuComponent } from './ruta-menu.component';

describe('RutaMenuComponent', () => {
  let component: RutaMenuComponent;
  let fixture: ComponentFixture<RutaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
