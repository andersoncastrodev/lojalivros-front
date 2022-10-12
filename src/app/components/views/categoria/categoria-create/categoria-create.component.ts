import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Categoria } from './../categoria-read/categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  /*
     criando um objeto no model categoria.
  */
  categoria: Categoria = {
    nome:'',
    descricao:''
  }
  constructor( private service: CategoriaService, private router: Router ) { }

  ngOnInit(): void {
  }

  
  create(): void{
    this.service.create(this.categoria).subscribe( (reposta)=>{
        this.router.navigate(['categorias'])
        this.service.mensagem("Categoria Criada com Sucesso!"); 
      }, err => {
          for(let i = 0; i < err.error.errors.length; i++){
               this.service.mensagem(err.error.errors[i].message)
          }
      })
  }

  cancelar(): void{
    this.router.navigate(['categorias']);
  }
 

}
