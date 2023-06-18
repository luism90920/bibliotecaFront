import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../service/genero.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Libro } from '../models/libro';
import { Genero } from '../models/genero';
import { LibroService } from '../service/libro.service';

@Component({
  selector: 'app-detalle-genero',
  templateUrl: './detalle-genero.component.html',
  styleUrls: ['./detalle-genero.component.css']
})
export class DetalleGeneroComponent implements OnInit {

  genero: Genero =  null;
  libros: Libro[] = [];

  constructor(
    private generoService: GeneroService,
    private libroService: LibroService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.cargarLibros();
    this.cargarGenero();
  }

  cargarLibros():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.libroService.listaLibroIdGenero(id).subscribe(
      data => {
        this.libros = data;
      },
      err => {
        this.toastr.error(err.erro.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }


  cargarGenero():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.generoService.detail(id).subscribe(
      data => {
        this.genero = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

  volver():void{
    this.router.navigate(['/listaGeneros']);
  }


  borrar(id: number):void{
    this.libroService.delete(id).subscribe(
      data => {
        this.toastr.success('Libro Eliminado', 'Ok',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

}
