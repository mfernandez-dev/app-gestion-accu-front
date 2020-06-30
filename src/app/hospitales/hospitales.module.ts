import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalesRoutingModule } from './hospitales-routing.module';
import { PantallaHospitalesComponent } from './components/pantalla-hospitales/pantalla-hospitales.component';


@NgModule({
  declarations: [PantallaHospitalesComponent],
  imports: [
    CommonModule,
    HospitalesRoutingModule
  ]
})
export class HospitalesModule { }
