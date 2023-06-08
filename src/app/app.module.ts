import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaLibroComponent } from './libro/lista-libro.component';
import { DetalleLibroComponent } from './libro/detalle-libro.component';
import { NuevoLibroComponent } from './libro/nuevo-libro.component';
import { EditarLibroComponent } from './libro/editar-libro.component';

import { ListaAutorComponent } from './autor/lista-autor.component';
import { DetalleAutorComponent } from './autor/detalle-autor.component';
import { NuevoAutorComponent } from './autor/nuevo-autor.component';
import { EditarAutorComponent } from './autor/editar-autor.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListaLibroComponent,
    DetalleLibroComponent,
    NuevoLibroComponent,
    EditarLibroComponent,
    ListaAutorComponent,
    DetalleAutorComponent,
    NuevoAutorComponent,
    EditarAutorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
