import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociadosRoutingModule } from './asociados-routing.module';
import { PantallaAsociadosComponent } from './components/pantalla-asociados/pantalla-asociados.component';
import { TablaAsociadosComponent } from './components/tabla-asociados/tabla-asociados.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [PantallaAsociadosComponent, TablaAsociadosComponent],
  imports: [
    CommonModule,
    AsociadosRoutingModule,
    MatTableModule
  ]
})
export class AsociadosModule { }
