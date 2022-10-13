import { HttpClient } from '@angular/common/http';

import { Livro } from './livro.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;
  
  constructor( private http: HttpClient, private _snack: MatSnackBar ) { }

  findAllByCategoria(id_cat: String): Observable<Livro[]>{
     const url = `${this.baseUrl}/livros?categoria=${id_cat}`
     return this.http.get<Livro[]>(url)
  }

  create(livro: Livro, id_cat: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    console.log(url)
    return this.http.post<Livro>(url, livro)
  }
  
  mensagem(str: String):void {
    this._snack.open(`${str}`,`OK`,{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000

    })
  }
}
