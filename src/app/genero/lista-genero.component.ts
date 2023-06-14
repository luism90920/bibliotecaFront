import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../service/genero.service';
import { ToastrService } from 'ngx-toastr';
import { Genero } from '../models/genero';

@Component({
  selector: 'app-lista-genero',
  templateUrl: './lista-genero.component.html',
  styleUrls: ['./lista-genero.component.css']
})
export class ListaGeneroComponent implements OnInit {

  generos: Genero[] = [];

  constructor(
    private generoService: GeneroService,
    private toastr: ToastrService,
  ){}

  ngOnInit(): void {
    this.cargarGenero();
  }

  cargarGenero():void{
    this.generoService.lista().subscribe(
      data => {
        this.generos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.generoService.delete(id).subscribe(
      data => {
        this.toastr.success('Genero borrado','OK',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarGenero();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

}
