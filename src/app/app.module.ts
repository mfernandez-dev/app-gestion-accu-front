import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { AsociadosModule } from './asociados/asociados.module';
import { HospitalesModule } from './hospitales/hospitales.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    AsociadosModule,
    HospitalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
