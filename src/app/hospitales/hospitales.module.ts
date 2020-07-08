import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalesRoutingModule } from './hospitales-routing.module';
import { PantallaHospitalesComponent } from './components/pantalla-hospitales/pantalla-hospitales.component';
import { TablaHospitalesComponent } from './components/tabla-hospitales/tabla-hospitales.component';


@NgModule({
  declarations: [PantallaHospitalesComponent, TablaHospitalesComponent],
  imports: [
    CommonModule,
    HospitalesRoutingModule
  ]
})
export class HospitalesModule { }
