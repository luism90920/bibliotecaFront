import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibroComponent } from './libro/lista-libro.component';
import { DetalleLibroComponent } from './libro/detalle-libro.component';
import { EditarLibroComponent } from './libro/editar-libro.component';
import { NuevoLibroComponent } from './libro/nuevo-libro.component';

const routes: Routes = [
  {path: '', component: ListaLibroComponent},
  {path: 'detalle/:id', component: DetalleLibroComponent},
  {path: 'editar/:id', component: EditarLibroComponent},
  {path: 'nuevo', component: NuevoLibroComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
