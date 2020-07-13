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
import { PantallaNuevoAsociadoComponent } from './components/pantalla-nuevo-asociado/pantalla-nuevo-asociado.component';
import { NuevoAsociadoFormComponent } from './components/nuevo-asociado-form/nuevo-asociado-form.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
    TablaDatosMedicosComponent,
    PantallaNuevoAsociadoComponent,
    NuevoAsociadoFormComponent
  ],
  imports: [
    CommonModule,
    AsociadosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AsociadosModule { }
