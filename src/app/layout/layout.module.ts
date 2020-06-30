import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardUserComponent } from './components/card-user/card-user.component';

import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [SideBarComponent, CardUserComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class LayoutModule { }
