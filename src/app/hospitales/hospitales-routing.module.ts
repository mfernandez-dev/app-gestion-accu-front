import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from '../layout/components/side-bar/side-bar.component';
import { PantallaHospitalesComponent } from './components/pantalla-hospitales/pantalla-hospitales.component';
import { PantallaDetalleHospitalComponent } from './components/pantalla-detalle-hospital/pantalla-detalle-hospital.component';


const routes: Routes = [
  {
    path: '',
    component: SideBarComponent,
    children: [
      {
        path: '',
        component: PantallaHospitalesComponent,
      },
    ],
  },
  {
    path: 'detalle/:hospitalId',
    component: PantallaDetalleHospitalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule { }
