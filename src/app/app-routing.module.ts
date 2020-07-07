import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'asociados',
    loadChildren: () => import('../app/asociados/asociados.module').then(m => m.AsociadosModule),
  },
  {
    path: 'hospitales',
    loadChildren: () => import('../app/hospitales/hospitales.module').then(m => m.HospitalesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
