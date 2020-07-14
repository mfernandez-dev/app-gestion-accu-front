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
import { TablaMedicosComponent } from './components/tabla-medicos/tabla-medicos.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [PantallaHospitalesComponent, TablaHospitalesComponent, BotonDetallesHospitalComponent, PantallaDetalleHospitalComponent, TablaMedicosComponent],
  imports: [
    CommonModule,
    HospitalesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule
  ]
})
export class HospitalesModule { }
