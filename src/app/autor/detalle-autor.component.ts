import { Component, OnInit } from '@angular/core';
import { AutorService } from './../service/autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Autor } from '../models/autor';
import { LibroService } from '../service/libro.service';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-detalle-autor',
  templateUrl: './detalle-autor.component.html',
  styleUrls: ['./detalle-autor.component.css']
})
export class DetalleAutorComponent implements OnInit {

  autor: Autor = null;
  libros: Libro[] = [];
  librosSeleccionados: Libro[] = [];

  constructor(
    private autorService: AutorService,
    private libroService: LibroService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ){}

  cargarLibro(): void{
    const idAutor = this.activatedRoute.snapshot.params['id'];
    this.libroService.listaLibroIdAutor(idAutor).subscribe(
      data => {
        this.libros = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.cargarLibro();
    const id = this.activatedRoute.snapshot.params['id'];
    this.autorService.detail(id).subscribe(
      data => {
        this.autor = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      }
    );
  }

  volver(): void{
    this.router.navigate(['/listaAutores']);
  }

  borrar(id: number): void {
    this.libroService.delete(id).subscribe(
      data => {
        this.toastr.success('Libro borrado', 'OK',{
          timeOut:3000, positionClass: 'toast-top-center'
        })
        this.cargarLibro();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        })
      }
    );
  }

}
