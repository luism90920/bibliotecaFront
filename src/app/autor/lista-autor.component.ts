import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AutorService } from '../service/autor.service';
import { Autor } from '../models/autor';

@Component({
  selector: 'app-lista-autor',
  templateUrl: './lista-autor.component.html',
  styleUrls: ['./lista-autor.component.css']
})
export class ListaAutorComponent implements OnInit {

  autores: Autor[] = [];

  constructor(
    private autorService: AutorService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.cargarAutor();
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

  borrar(id: number) {
    this.autorService.delete(id).subscribe(
      data => {
        this.toastr.success('Autor borrado', 'OK', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.cargarAutor();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

}