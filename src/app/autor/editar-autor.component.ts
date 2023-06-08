import { Component, OnInit } from '@angular/core';
import { AutorService } from '../service/autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Autor } from '../models/autor';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {

  autor: Autor = null;
 

  constructor(
    private autorService: AutorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.autorService.detail(id).subscribe(
      data => {
        //insertamos el libro para llamar al "titulo" del libro a modificar
        this.autor = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaAutores']);
      }
    );
}

onUpdate(): void {
  const id = this.activatedRoute.snapshot.params['id'];
  this.autorService.update(id, this.autor).subscribe(
    data => {
      this.toastr.success('Autor Actualizado', 'OK',{
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
