import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  generoURL = 'http://localhost:8080/genero/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Genero[]>{
    return this.httpClient.get<Genero[]>(this.generoURL + 'lista');
  }

  public detail(id: number): Observable<Genero>{
    return this.httpClient.get<Genero>(this.generoURL + `detail/${id}`);
  }

  public save(genero: Genero): Observable<any>{
    return this.httpClient.post<any>(this.generoURL + `create`, genero);
  }

  public update(id: number, genero: Genero): Observable<any>{
    return this.httpClient.put<any>(this.generoURL + `update/${id}`, genero);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.generoURL + `delete/${id}`);
  }

}
