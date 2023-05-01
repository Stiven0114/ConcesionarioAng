

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule ,Routes} from '@angular/router';
import { ListClientesComponent } from './../clientes/list-clientes/list-clientes.component';
import { AddClienteComponent } from '../cliente/add-cliente/add-cliente.component';




const appRoutes: Routes =
[
  {path:"lista-cliente",component : ListClientesComponent},
  {path:"crear-cliente",component : AddClienteComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
