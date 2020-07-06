import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaAsociadosComponent } from './components/pantalla-asociados/pantalla-asociados.component';
import { SideBarComponent } from '../layout/components/side-bar/side-bar.component';


const routes: Routes =  [
  {
    path: '',
    component: SideBarComponent,
    children: [
      {
        path: 'asociados',
        component: PantallaAsociadosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociadosRoutingModule { }
