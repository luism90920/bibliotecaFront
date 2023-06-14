import { Component, OnInit } from '@angular/core';
import { LibroService } from '../service/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';
import { Autor } from '../models/autor';
import { AutorService } from '../service/autor.service';
import { GeneroService } from '../service/genero.service';
import { EditorialService } from '../service/editorial.service';
import { Editorial } from '../models/editorial';
import { Genero } from '../models/genero';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit{

  libro: Libro = null;
  titulo = '';
  autores: Autor[] = [];
  editoriales: Editorial[] = [];
  generos: Genero[] = [];
  


  constructor(
    private libroService: LibroService,
    private autorService: AutorService,
    private generoService: GeneroService,
    private editorialService: EditorialService,
    private activatedRoute: ActivatedRoute,
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

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.libroService.detail(id).subscribe(
        data => {
          //insertamos el libro para llamar al "titulo" del libro a modificar
          this.libro = data;

          //insertamos en el formulario de modificación el nombre el autor
          this.libro.nombreAutor = this.libro.autor.nombre;
          this.libro.nombreGenero = this.libro.genero.nombre;
          this.libro.nombreEditorial = this.libro.editorial.nombre;

          //cargamos el listado de autores para modificar el autor de ser necesario
          this.cargarAutor();
          this.cargarGenero();
          this.cargarEditorial();
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
    const id = this.activatedRoute.snapshot.params['id'];
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
