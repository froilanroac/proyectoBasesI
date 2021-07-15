import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroListComponent } from './components/registro-list/registro-list.component';
import { RegistroFormComponent } from "./components/registro-form/registro-form.component";
import { RegistroPaisFormComponent} from "./components/registro-pais-form/registro-pais-form.component";
import { RegistroCiudadFormComponent } from "./components/registro-ciudad-form/registro-ciudad-form.component";
import { RegistroClubFormComponent } from "./components/registro-club-form/registro-club-form.component";
import { RegistroRepresentanteFormComponent } from "./components/registro-representante-form/registro-representante-form.component";
import { RegistroColeccionistaFormComponent } from "./components/registro-coleccionista-form/registro-coleccionista-form.component";
import { RegistroMembresiaFormComponent } from "./components/registro-membresia-form/registro-membresia-form.component"
import { RegistroCierreMembresiaFormComponent } from "./components/registro-cierre-membresia-form/registro-cierre-membresia-form.component"
import { RegistroObjetoFormComponent } from "./components/registro-objeto-form/registro-objeto-form.component";
import { RegistroInteresesComponent } from "./components/registro-intereses/registro-intereses.component";
import { RegistroContactosClubesComponent } from "./components/registro-contactos-clubes/registro-contactos-clubes.component";
import { RegistroOrganizacionCaridadComponent } from "./components/registro-organizacion-caridad/registro-organizacion-caridad.component";
import { RegistroLugarSubastaComponent } from "./components/registro-lugar-subasta/registro-lugar-subasta.component";
import { RegistroComicFormComponent  } from "./components/registro-comic-form/registro-comic-form.component";
import { RegistroSubastasComponentComponent } from "./components/registro-subastas-component/registro-subastas-component.component";
import { RegistroSubastaComponent } from "./components/registro-subasta/registro-subasta.component";

import { InicioComponent } from "./components/inicio/inicio.component";

const routes: Routes = [
  {
    path: '',
    // la direccion al la ruta inicial
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'registros',
    component: RegistroListComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'registros/add',
    component: RegistroFormComponent
  },
  {
    path: 'registros/edit/:id',
    component: RegistroFormComponent
  },
  {
    path: 'registros/registrarclub',
    component: RegistroClubFormComponent
  },
  {
    path: 'registros/registrarrepresentante',
    component: RegistroRepresentanteFormComponent
  },
  {
    path: 'registros/pais',
    component: RegistroPaisFormComponent
  },
  {
    path: 'registros/registrarciudad',
    component: RegistroCiudadFormComponent
  },
  {
    path: 'registros/registrarcoleccionista',
    component: RegistroColeccionistaFormComponent
  },
  {
    path: 'registros/registrarmembresia',
    component: RegistroMembresiaFormComponent
  },
  {
    path: 'registros/cerrarmembresia',
    component: RegistroCierreMembresiaFormComponent
  },
  {
    path: 'registros/objetovalor',
    component: RegistroObjetoFormComponent
  },
  {
    path: 'registros/comic',
    component: RegistroComicFormComponent 
  },
  {
    path: 'registros/intereses',
    component: RegistroInteresesComponent
  },
  {
    path: 'registros/contactos',
    component: RegistroContactosClubesComponent
  },
  {
    path: 'registros/organizacion',
    component: RegistroOrganizacionCaridadComponent
  },
  {
    path: 'registros/lugares',
    component: RegistroLugarSubastaComponent
  },
  {
    path: 'registros/subastas',
    component: RegistroSubastasComponentComponent
  },
  {
    path: 'registros/subasta',
    component: RegistroSubastaComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
