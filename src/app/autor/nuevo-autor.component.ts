import { Component, OnInit } from '@angular/core';
import { AutorService } from '../service/autor.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Autor } from '../models/autor';

@Component({
  selector: 'app-nuevo-autor',
  templateUrl: './nuevo-autor.component.html',
  styleUrls: ['./nuevo-autor.component.css']
})
export class NuevoAutorComponent implements OnInit {
  
  nombre = '';

  constructor(
    private autorService: AutorService,
    private toastr: ToastrService,
    private router: Router
  ){}


  ngOnInit(): void {
    
  }

  onCreate(): void{
    const autor = new Autor(this.nombre);
    this.autorService.save(autor).subscribe(
      data => {
        this.toastr.success('Autor creado','OK',{
          timeOut: 3000, positionClass: 'toast-top-center'
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
