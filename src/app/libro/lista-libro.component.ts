import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../service/libro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  libros: Libro[] = [];

  constructor(
    private libroService: LibroService,
    private toastr: ToastrService
    ){}

  ngOnInit() {
    this.cargarLibro();
  }

  cargarLibro(): void{
    this.libroService.lista().subscribe(
        data => {
          this.libros = data;
        },
        err => {
          console.log(err);
        }
      );
  }

  borrar(id: number) {
    this.libroService.delete(id).subscribe(
      data => {
        this.toastr.success('Libro borrado', 'OK', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.cargarLibro();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
    
  }

}
