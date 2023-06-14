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
import { NuevoGeneroComponent } from './genero/nuevo-genero.component';
import { NuevoEditorialComponent } from './editorial/nuevo-editorial.component';
import { ListaGeneroComponent } from './genero/lista-genero.component';
import { ListaEditorialComponent } from './editorial/lista-editorial.component';
import { DetalleGeneroComponent } from './genero/detalle-genero.component';
import { DetalleEditorialComponent } from './editorial/detalle-editorial.component';
import { EditarGeneroComponent } from './genero/editar-genero.component';
import { EditarEditorialComponent } from './editorial/editar-editorial.component';

const routes: Routes = [
  {path: '', component: ListaLibroComponent},
  {path: 'listaAutores', component: ListaAutorComponent},
  {path: 'listaGeneros', component: ListaGeneroComponent},
  {path: 'listaEditoriales', component: ListaEditorialComponent},
  {path: 'detalleLibro/:id', component: DetalleLibroComponent},
  {path: 'detalleAutor/:id', component: DetalleAutorComponent},
  {path: 'detalleGenero/:id', component: DetalleGeneroComponent},
  {path: 'detalleEditorial/:id', component: DetalleEditorialComponent},
  {path: 'editarLibro/:id', component: EditarLibroComponent},
  {path: 'editarAutor/:id', component: EditarAutorComponent},
  {path: 'editarGenero/:id', component: EditarGeneroComponent},
  {path: 'editarEditorial/:id', component: EditarEditorialComponent},
  {path: 'nuevoLibro', component: NuevoLibroComponent},
  {path: 'nuevoAutor', component: NuevoAutorComponent},
  {path: 'nuevoGenero', component: NuevoGeneroComponent},
  {path: 'nuevoEditorial', component: NuevoEditorialComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
