import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaAsociadosComponent } from './components/pantalla-asociados/pantalla-asociados.component';
import { SideBarComponent } from '../layout/components/side-bar/side-bar.component';
import { PantallaDetallesComponent } from './components/pantalla-detalles/pantalla-detalles.component';


const routes: Routes =  [
  {
    path: '',
    component: SideBarComponent,
    children: [
      {
        path: '',
        component: PantallaAsociadosComponent,
      },
    ],
  },
  {
    path: 'details/:asociadoId',
    component: PantallaDetallesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociadosRoutingModule { }
