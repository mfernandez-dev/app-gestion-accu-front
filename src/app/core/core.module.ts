import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { AsociadosModule } from '../asociados/asociados.module';
import { HospitalesModule } from '../hospitales/hospitales.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: []
})

export class CoreModule { }
