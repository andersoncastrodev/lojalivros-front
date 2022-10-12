import { environment } from './../../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {  }

  findAll():Observable<Categoria[]>{
     const url = `${this.baseUrl}/categorias` 
    /*const url = 'api/categorias' */
     return this.http.get<Categoria[]>(url);
  }
  
  findById(id: String): Observable<Categoria>{
     const url = `${this.baseUrl}/categorias/${id}`
     return this.http.get<Categoria>(url);
  }
 
  /* Criando o metodo para chamar e enviar os dados para Api*/
  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url,categoria);
  }


  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url)
  }

  update(categoria: Categoria): Observable<void>{
     const url = `${this.baseUrl}/categorias/${categoria.id}`
     return this.http.put<void>(url, categoria)
  }

  mensagem(str: String):void {
    this._snack.open(`${str}`,`OK`,{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000

    })
  }

}
