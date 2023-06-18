import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../service/editorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Autor } from '../models/autor';
import { Editorial } from '../models/editorial';

@Component({
  selector: 'app-editar-editorial',
  templateUrl: './editar-editorial.component.html',
  styleUrls: ['./editar-editorial.component.css']
})
export class EditarEditorialComponent implements OnInit {

  editorial: Editorial = null;

  constructor(
    private editorialService: EditorialService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.cargarEditorial();
  }

  cargarEditorial():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.editorialService.detail(id).subscribe(
      data => {
        this.editorial = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }


  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.editorialService.update(id, this.editorial).subscribe(
      data => {
        this.toastr.success('Editorial Actualizada', 'OK',{
          timeOut:3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaEditoriales']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/listaEditoriales']);
      }
    );
  }


}
