import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libroURL = 'http://localhost:8080/libro/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Libro[]> {
    return this.httpClient.get<Libro[]>(this.libroURL + 'lista');
  }

  public detail(id: number): Observable<Libro> {
    return this.httpClient.get<Libro>(this.libroURL + `detail/${id}`);
  }

  public save(libro: Libro): Observable<any> {
    return this.httpClient.post<any>(this.libroURL + 'create', libro);
  }

  public update(id: number, libro:Libro): Observable<any> {
    return this.httpClient.put<any>(this.libroURL + `update/${id}`, libro);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.libroURL + `delete/${id}`)
  }

}
