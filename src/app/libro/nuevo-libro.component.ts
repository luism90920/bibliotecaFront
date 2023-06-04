import { Component, OnInit } from '@angular/core';
import { LibroService } from '../service/libro.service';
import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  titulo = '';

  constructor(
    private libroService: LibroService,
    private toastr: ToastrService,
    private router: Router
  ){

  }

  ngOnInit(): void {
      
  }

  onCreate(): void {
    const libro = new Libro(this.titulo);
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
