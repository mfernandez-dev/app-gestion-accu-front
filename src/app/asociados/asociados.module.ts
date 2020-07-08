import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociadosRoutingModule } from './asociados-routing.module';
import { PantallaAsociadosComponent } from './components/pantalla-asociados/pantalla-asociados.component';
import { TablaAsociadosComponent } from './components/tabla-asociados/tabla-asociados.component';
import { MatTableModule } from '@angular/material/table';
import { BotonNuevoAsociadoComponent } from './components/boton-nuevo-asociado/boton-nuevo-asociado.component';
import { MatIconModule } from '@angular/material/icon';
import { PantallaDetallesComponent } from './components/pantalla-detalles/pantalla-detalles.component';
import { DetailsButtonComponent } from './components/details-button/details-button.component';
import { TablaInfoPersonalComponent } from './components/tabla-info-personal/tabla-info-personal.component';
import { TablaDireccionComponent } from './components/tabla-direccion/tabla-direccion.component';
import { TablaDatosBancariosComponent } from './components/tabla-datos-bancarios/tabla-datos-bancarios.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import { HistorialPagosComponent } from './components/historial-pagos/historial-pagos.component';
import { TablaDatosMedicosComponent } from './components/tabla-datos-medicos/tabla-datos-medicos.component';

@NgModule({
  declarations: [
    PantallaAsociadosComponent,
    TablaAsociadosComponent,
    BotonNuevoAsociadoComponent,
    PantallaDetallesComponent,
    DetailsButtonComponent,
    TablaInfoPersonalComponent,
    TablaDireccionComponent,
    TablaDatosBancariosComponent,
    HistorialPagosComponent,
    TablaDatosMedicosComponent
  ],
  imports: [
    CommonModule,
    AsociadosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class AsociadosModule { }
