import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HospitalesModule } from '../hospitales/hospitales.module';
import { AsociadosModule } from '../asociados/asociados.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    HospitalesModule,
    AsociadosModule],
  exports: []
})

export class CoreModule { }
