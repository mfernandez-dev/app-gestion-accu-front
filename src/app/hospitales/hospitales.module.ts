import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalesRoutingModule } from './hospitales-routing.module';
import { PantallaHospitalesComponent } from './components/pantalla-hospitales/pantalla-hospitales.component';
import { TablaHospitalesComponent } from './components/tabla-hospitales/tabla-hospitales.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BotonDetallesHospitalComponent } from './components/boton-detalles-hospital/boton-detalles-hospital.component';
import { PantallaDetalleHospitalComponent } from './components/pantalla-detalle-hospital/pantalla-detalle-hospital.component';


@NgModule({
  declarations: [PantallaHospitalesComponent, TablaHospitalesComponent, BotonDetallesHospitalComponent, PantallaDetalleHospitalComponent],
  imports: [
    CommonModule,
    HospitalesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class HospitalesModule { }
