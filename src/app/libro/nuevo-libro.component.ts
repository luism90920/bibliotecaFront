import { Component, OnInit } from '@angular/core';
import { LibroService } from '../service/libro.service';
import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';
import { Route, Router } from '@angular/router';
import { AutorService } from '../service/autor.service';
import { Autor } from '../models/autor';
import { Editorial } from '../models/editorial';
import { Genero } from '../models/genero';
import { GeneroService } from '../service/genero.service';
import { EditorialService } from '../service/editorial.service';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  titulo = '';
  autores: Autor[] = [];
  editoriales: Editorial[] = [];
  generos: Genero[] = [];
  ejemplares = null;
  nombreAutor = '';
  nombreGenero = '';
  nombreEditorial = '';

  constructor(
    private libroService: LibroService,
    private autorService: AutorService,
    private generoService: GeneroService,
    private editorialService: EditorialService,
    private toastr: ToastrService,
    private router: Router
  ){

  }

  ngOnInit(): void {
      this.cargarAutor();
      this.cargarEditorial();
      this.cargarGenero();
  }

  cargarAutor(): void {
    this.autorService.lista().subscribe(
      data => {
        this.autores = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarEditorial(): void {
    this.editorialService.lista().subscribe(
      data => {
        this.editoriales = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarGenero(): void {
    this.generoService.lista().subscribe(
      data => {
        this.generos = data;
      },
      err => {
        console.log(err);
      }
    );
  }


  onCreate(): void {
    const libro = new Libro(this.titulo, this.nombreAutor, this.ejemplares, this.nombreGenero, this.nombreEditorial);
    this.libroService.save(libro).subscribe(
      data => {
        this.toastr.success('Libro creado', 'OK',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }


}
