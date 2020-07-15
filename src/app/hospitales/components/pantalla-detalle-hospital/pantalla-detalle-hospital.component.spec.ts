import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDetalleHospitalComponent } from './pantalla-detalle-hospital.component';

describe('PantallaDetalleHospitalComponent', () => {
  let component: PantallaDetalleHospitalComponent;
  let fixture: ComponentFixture<PantallaDetalleHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaDetalleHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaDetalleHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
