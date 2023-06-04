import { Component, OnInit } from '@angular/core';
import { LibroService } from '../service/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit{

  libro: Libro = null;

  constructor(
    private libroService: LibroService,
    private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.libroService.detail(id).subscribe(
        data => {
          this.libro = data;
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
