import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociadosRoutingModule } from './asociados-routing.module';
import { PantallaAsociadosComponent } from './components/pantalla-asociados/pantalla-asociados.component';
import { TablaAsociadosComponent } from './components/tabla-asociados/tabla-asociados.component';
import { MatTableModule } from '@angular/material/table';
import { BotonNuevoAsociadoComponent } from './components/boton-nuevo-asociado/boton-nuevo-asociado.component';
import { MatIconModule } from '@angular/material/icon';
import { PantallaDetallesComponent } from './components/pantalla-detalles/pantalla-detalles.component';

@NgModule({
  declarations: [PantallaAsociadosComponent, TablaAsociadosComponent, BotonNuevoAsociadoComponent, PantallaDetallesComponent],
  imports: [
    CommonModule,
    AsociadosRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class AsociadosModule { }
