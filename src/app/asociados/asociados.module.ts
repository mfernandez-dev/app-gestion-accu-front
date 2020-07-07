import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociadosRoutingModule } from './asociados-routing.module';
import { PantallaAsociadosComponent } from './components/pantalla-asociados/pantalla-asociados.component';
import { TablaAsociadosComponent } from './components/tabla-asociados/tabla-asociados.component';


@NgModule({
  declarations: [PantallaAsociadosComponent, TablaAsociadosComponent],
  imports: [
    CommonModule,
    AsociadosRoutingModule
  ]
})
export class AsociadosModule { }
