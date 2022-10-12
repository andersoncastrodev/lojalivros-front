import { HttpClient } from '@angular/common/http';

import { Livro } from './livro.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;
  
  constructor( private http: HttpClient ) { }

  findAllByCategoria(id_cat: String): Observable<Livro[]>{
     const url = `${this.baseUrl}/livros?categoria=${id_cat}`
     return this.http.get<Livro[]>(url)
  }
  

}
