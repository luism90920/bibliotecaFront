import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../service/editorial.service';
import { ToastrService } from 'ngx-toastr';
import { Editorial } from '../models/editorial';

@Component({
  selector: 'app-lista-editorial',
  templateUrl: './lista-editorial.component.html',
  styleUrls: ['./lista-editorial.component.css']
})
export class ListaEditorialComponent implements OnInit {
  
  editoriales: Editorial[] = [];

  constructor(
    private editorialService: EditorialService,
    private toastr: ToastrService,

  ){}

  ngOnInit(): void {
    this.cargarEditoriales();
  }

  cargarEditoriales():void{
    this.editorialService.lista().subscribe(
      data => {
        this.editoriales = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        })
      }
    );
  }

  borrar(id: number):void{
    this.editorialService.delete(id).subscribe(
      data => {
        this.toastr.success('Editorial borrada', 'OK',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.cargarEditoriales();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

}
