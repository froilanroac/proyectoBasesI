import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';
import { RegistroListComponent } from './components/registro-list/registro-list.component';

import { RegistrosService } from './services/registros.service';
import { RegistroPaisFormComponent } from './components/registro-pais-form/registro-pais-form.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroCiudadFormComponent } from './components/registro-ciudad-form/registro-ciudad-form.component';
import { RegistroClubFormComponent } from './components/registro-club-form/registro-club-form.component';
import { RegistroRepresentanteFormComponent } from './components/registro-representante-form/registro-representante-form.component';
import { RegistroColeccionistaFormComponent } from './components/registro-coleccionista-form/registro-coleccionista-form.component';
import { RegistroMembresiaFormComponent } from './components/registro-membresia-form/registro-membresia-form.component';
import { RegistroCierreMembresiaFormComponent } from './components/registro-cierre-membresia-form/registro-cierre-membresia-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroFormComponent,
    RegistroListComponent,
    RegistroPaisFormComponent,
    InicioComponent,
    RegistroCiudadFormComponent,
    RegistroClubFormComponent,
    RegistroRepresentanteFormComponent,
    RegistroColeccionistaFormComponent,
    RegistroMembresiaFormComponent,
    RegistroCierreMembresiaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RegistrosService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
