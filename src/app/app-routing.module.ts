import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibroComponent } from './libro/lista-libro.component';
import { DetalleLibroComponent } from './libro/detalle-libro.component';
import { EditarLibroComponent } from './libro/editar-libro.component';
import { NuevoLibroComponent } from './libro/nuevo-libro.component';
import { NuevoAutorComponent } from './autor/nuevo-autor.component';
import { ListaAutorComponent } from './autor/lista-autor.component';
import { DetalleAutorComponent } from './autor/detalle-autor.component';
import { EditarAutorComponent } from './autor/editar-autor.component';

const routes: Routes = [
  {path: '', component: ListaLibroComponent},
  {path: 'listaAutores', component: ListaAutorComponent},
  {path: 'detalleLibro/:id', component: DetalleLibroComponent},
  {path: 'detalleAutor/:id', component: DetalleAutorComponent},
  {path: 'editarLibro/:id', component: EditarLibroComponent},
  {path: 'editarAutor/:id', component: EditarAutorComponent},
  {path: 'nuevoLibro', component: NuevoLibroComponent},
  {path: 'nuevoAutor', component: NuevoAutorComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
