import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaHospitalesComponent } from './pantalla-hospitales.component';

describe('PantallaHospitalesComponent', () => {
  let component: PantallaHospitalesComponent;
  let fixture: ComponentFixture<PantallaHospitalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaHospitalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaHospitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
