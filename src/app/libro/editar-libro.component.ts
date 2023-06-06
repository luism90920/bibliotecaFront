import { Component, OnInit } from '@angular/core';
import { LibroService } from '../service/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';
import { Autor } from '../models/autor';
import { AutorService } from '../service/autor.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit{

  libro: Libro = null;
  titulo = '';
  autores: Autor[] = [];
  nombreAutor = '';


  constructor(
    private libroService: LibroService,
    private autorService: AutorService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ){}

  cargarAutor(): void {
    console.log(this.autorService.lista());
    this.autorService.lista().subscribe(
      data => {
        this.autores = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.libroService.detail(id).subscribe(
        data => {
          //insertamos el libro para llamar al "titulo" del libro a modificar
          this.libro = data;

          //insertamos en el formulario de modificación el nombre el autor
          this.libro.nombreAutor = this.libro.autor.nombre;

          //cargamos el listado de autores para modificar el autor de ser necesario
          this.cargarAutor();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.router.navigate(['/']);
        }
      );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.libroService.update(id, this.libro).subscribe(
      data => {
        this.toastr.success('Libro Actualizado', 'OK',{
          timeOut:3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
