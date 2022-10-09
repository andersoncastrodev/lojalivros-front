import { environment } from './../../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria-read/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {  }

  findAll():Observable<Categoria[]>{
     const url = `${this.baseUrl}/categorias` 
    /*const url = 'api/categorias' */
     return this.http.get<Categoria[]>(url);
  }
 
}
