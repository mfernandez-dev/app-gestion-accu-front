import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardUsuarioComponent } from './components/card-usuario/card-usuario.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card';
import { NavegationMenuComponent } from './components/navegation-menu/navegation-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VersionComponent } from './components/version/version.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SideBarComponent, CardUsuarioComponent, NavegationMenuComponent, ToolbarComponent, VersionComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class LayoutModule { }
