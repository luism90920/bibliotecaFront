import { Component, OnInit } from '@angular/core';
import { Genero } from '../models/genero';
import { GeneroService } from '../service/genero.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  genero: Genero = null;

  constructor(
    private generoService: GeneroService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.generoService.detail(id).subscribe(
      data => {
        this.genero = data;
      },
      err => {
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaGeneros']);
      }
    );
  }


  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.generoService.update(id, this.genero).subscribe(
      data => {
        this.toastr.success('Genero actualizado','OK',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaGeneros']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaGeneros']);
      }
    );
  }

  

}
