import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from '../layout/components/side-bar/side-bar.component';
import { PantallaHospitalesComponent } from './components/pantalla-hospitales/pantalla-hospitales.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule { }
