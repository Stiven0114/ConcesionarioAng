import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';

import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';

import { from } from 'rxjs';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientesComponent,
    AddClienteComponent,
    HeaderComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
