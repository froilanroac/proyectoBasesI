import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroListComponent } from './components/registro-list/registro-list.component';
import { RegistroFormComponent } from "./components/registro-form/registro-form.component";

const routes: Routes = [
  {
    path: '',
    // la direccion al la ruta inicial
    redirectTo: '/registros',
    pathMatch: 'full'
  },
  {
    path: 'registros',
    component: RegistroListComponent
  },
  {
    path: 'registros/add',
    component: RegistroFormComponent
  },
  {
    path: 'registros/edit/:id',
    component: RegistroFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
