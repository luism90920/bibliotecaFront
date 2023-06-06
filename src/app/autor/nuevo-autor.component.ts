import { Component, OnInit } from '@angular/core';
import { AutorService } from '../service/autor.service';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-autor',
  templateUrl: './nuevo-autor.component.html',
  styleUrls: ['./nuevo-autor.component.css']
})
export class NuevoAutorComponent implements OnInit {
  
  nombre = '';

  constructor(
    private autorService: AutorService,
    private toastr: ToastrModule,
    private Router: Router
  ){}


  ngOnInit(): void {
    
  }

  onCreate(): void{

  }

}
