import { Component, OnInit } from '@angular/core';
import { EditorialService } from './../service/editorial.service';
import { LibroService } from './../service/libro.service';
import { Libro } from '../models/libro';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Editorial } from '../models/editorial';

@Component({
  selector: 'app-detalle-editorial',
  templateUrl: './detalle-editorial.component.html',
  styleUrls: ['./detalle-editorial.component.css']
})
export class DetalleEditorialComponent implements OnInit {

  libros: Libro[] = [];
  editorial: Editorial = null;

  constructor(
    private editorialService: EditorialService,
    private libroService: LibroService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.cargarLibros();
    this.cargarEditorial();
  }

  cargarEditorial(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.editorialService.detail(id).subscribe(
      data => {
        this.editorial = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

  cargarLibros():void{
    const idEditorial = this.activatedRoute.snapshot.params['id'];
    this.libroService.listaLibroIdEditorial(idEditorial).subscribe(
      data => {
        this.libros = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

  volver():void{
    this.router.navigate(['/listaEditoriales']);
  }

  borrar(id: number):void{
    this.libroService.delete(id).subscribe(
      data => {
        this.toastr.success('Libro borrado', 'OK',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    );
  }

}
