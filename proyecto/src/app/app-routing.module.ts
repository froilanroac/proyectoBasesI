import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroListComponent } from './components/registro-list/registro-list.component';
import { RegistroFormComponent } from "./components/registro-form/registro-form.component";
import { RegistroPaisFormComponent} from "./components/registro-pais-form/registro-pais-form.component";
import { RegistroCiudadFormComponent } from "./components/registro-ciudad-form/registro-ciudad-form.component";
import { RegistroClubFormComponent } from "./components/registro-club-form/registro-club-form.component";
import { RegistroRepresentanteFormComponent } from "./components/registro-representante-form/registro-representante-form.component";
import { RegistroColeccionistaFormComponent } from "./components/registro-coleccionista-form/registro-coleccionista-form.component"
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
  }
  ,
  {
    path: 'registros/registrarcoleccionista',
    component: RegistroColeccionistaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
