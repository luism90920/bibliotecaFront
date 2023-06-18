import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../service/editorial.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Editorial } from '../models/editorial';

@Component({
  selector: 'app-nuevo-editorial',
  templateUrl: './nuevo-editorial.component.html',
  styleUrls: ['./nuevo-editorial.component.css']
})
export class NuevoEditorialComponent implements OnInit {

  nombre = '';

  constructor(
    private editorialService: EditorialService,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  onCreate():void{
    const editorial = new Editorial(this.nombre);
    this.editorialService.save(editorial).subscribe(
      data => {
        this.toastr.success('Editorial creada', 'OK',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaEditoriales']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

}
