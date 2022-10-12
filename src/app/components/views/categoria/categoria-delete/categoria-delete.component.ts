import { Categoria } from '../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn, Subscriber } from 'rxjs';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor( private service : CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

      this.categoria.id = this.route.snapshot.paramMap.get('id')!
     
      this.findById()
  }
  

  findById(): void {
      this.service.findById(this.categoria.id!).subscribe(
        (reposta) =>{
          this.categoria = reposta
        }
      )
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe(
     
      (reposta) => {
        this.router.navigate(['categorias'])
        this.service.mensagem('Categoria Deletado com Sucesso')
      }, err =>{
        this.service.mensagem(err.error.error)
      }
      
    )
  }

  cancelar(): void{
    this.router.navigate(['categorias'])
  }

}
