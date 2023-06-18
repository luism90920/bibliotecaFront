import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../service/genero.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Genero } from '../models/genero';

@Component({
  selector: 'app-nuevo-genero',
  templateUrl: './nuevo-genero.component.html',
  styleUrls: ['./nuevo-genero.component.css']
})
export class NuevoGeneroComponent implements OnInit {

  nombre = '';

  constructor(
    private generoService: GeneroService,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  onCreate():void{
    const genero = new Genero(this.nombre);
    this.generoService.save(genero).subscribe(
      data => {
        this.toastr.success('Genero creado', 'OK',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaGeneros']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut: 3000, positionClass: 'toast-top-center'
        })
      }
    );
  }

}
