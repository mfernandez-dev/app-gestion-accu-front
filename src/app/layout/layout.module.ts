import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardUsuarioComponent } from './components/card-usuario/card-usuario.component';
import { MatSidenavModule } from '@angular/material/sidenav'


@NgModule({
  declarations: [SideBarComponent, CardUsuarioComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule

  ]
})
export class LayoutModule { }
