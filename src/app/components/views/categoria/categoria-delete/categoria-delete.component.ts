import { Categoria } from '../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor( private service : CategoriaService, private route: ActivatedRoute) { }

  ngOnInit(): void {

      this.categoria.id = this.route.snapshot.paramMap.get('id')!
  }
  

  findById(): void {
      this.service.findById(this.categoria.id!).subscribe(
        (reposta) =>{
          this.categoria = reposta
          console.log(reposta)
        }
      )
  }

}
