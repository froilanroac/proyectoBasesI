import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';
import { RegistroListComponent } from './components/registro-list/registro-list.component';

import { RegistrosService } from './services/registros.service';
import { RegistroPaisFormComponent } from './components/registro-pais-form/registro-pais-form.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroCiudadFormComponent } from './components/registro-ciudad-form/registro-ciudad-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroFormComponent,
    RegistroListComponent,
    RegistroPaisFormComponent,
    InicioComponent,
    RegistroCiudadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RegistrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
