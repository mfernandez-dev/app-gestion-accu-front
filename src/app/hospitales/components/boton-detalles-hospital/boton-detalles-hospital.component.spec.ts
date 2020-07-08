import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDetallesHospitalComponent } from './boton-detalles-hospital.component';

describe('BotonDetallesHospitalComponent', () => {
  let component: BotonDetallesHospitalComponent;
  let fixture: ComponentFixture<BotonDetallesHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonDetallesHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDetallesHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
