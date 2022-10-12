import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void{
    this.service.findById(this.categoria.id!).subscribe(
      (resposta) =>{
        this.categoria = resposta
      }
    )
  }

  update(): void{
    this.service.update(this.categoria).subscribe(
      (reposta)=>{
       this.router.navigate(['categorias'])
       this.service.mensagem('Categoria Atualizada Com Sucesso!')
    }, err => {
       this.service.mensagem('Campos em Brancos, Verifique todos os campos')
    })
  }

  cancelar(): void{
     this.router.navigate(['categorias'])
  }

}
