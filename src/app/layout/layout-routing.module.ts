import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../asociados/asociados.module').then(m => m.AsociadosModule),
  },
  {
    path: 'hospitales',
    loadChildren: () => import('../hospitales/hospitales.module').then(m => m.HospitalesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
