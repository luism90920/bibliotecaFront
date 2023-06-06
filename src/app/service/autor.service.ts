import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  autorURL = 'http://localhost:8080/autor/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Autor[]>{
    return this.httpClient.get<Autor[]>(this.autorURL + 'lista');
  }

  public detail(id: number): Observable<Autor>{
    return this.httpClient.get<Autor>(this.autorURL + `detail/${id}`);
  }

  public save (autor: Autor): Observable<any>{
    return this.httpClient.post<any>(this.autorURL + `create`, autor); 
  }

  public update(id: number, autor: Autor): Observable<any>{
    return this.httpClient.put<any>(this.autorURL + `update/${id}`, autor);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.autorURL + `delete/${id}`);
  }
}
