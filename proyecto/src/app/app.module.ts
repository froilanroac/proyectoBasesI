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
import { RegistroObjetoFormComponent } from './components/registro-objeto-form/registro-objeto-form.component';
import { RegistroComicFormComponent } from './components/registro-comic-form/registro-comic-form.component';
import { RegistroInteresesComponent } from './components/registro-intereses/registro-intereses.component';
import { RegistroContactosClubesComponent } from './components/registro-contactos-clubes/registro-contactos-clubes.component';
import { RegistroOrganizacionCaridadComponent } from './components/registro-organizacion-caridad/registro-organizacion-caridad.component';
import { RegistroLugarSubastaComponent } from './components/registro-lugar-subasta/registro-lugar-subasta.component';
import { RegistroSubastasComponentComponent } from './components/registro-subastas-component/registro-subastas-component.component';
import { RegistroSubastaComponent } from './components/registro-subasta/registro-subasta.component';
import { CalendarioSubastasComponent } from './components/calendario-subastas/calendario-subastas.component';
import { SimularComponent } from './components/simular/simular.component';
import { ListaSimularComponent } from './components/lista-simular/lista-simular.component';


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
    RegistroCierreMembresiaFormComponent,
    RegistroObjetoFormComponent,
    RegistroComicFormComponent,
    RegistroInteresesComponent,
    RegistroContactosClubesComponent,
    RegistroOrganizacionCaridadComponent,
    RegistroLugarSubastaComponent,
    RegistroSubastasComponentComponent,
    RegistroSubastaComponent,
    CalendarioSubastasComponent,
    SimularComponent,
    ListaSimularComponent
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
