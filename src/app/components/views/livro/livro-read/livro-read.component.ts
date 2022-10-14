import { Livro } from './../livro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

id_cat: String = ''

livro: Livro = {
  id:'',
  titulo:'',
  nomeAutor:'',
  texto:''
}

constructor(private service: LivroService, private route: ActivatedRoute, private router: Router) { }

ngOnInit(): void {
  this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
  this.livro.id = this.route.snapshot.paramMap.get('id')!
  this.findById();
}

findById(){
  this.service.findById(this.livro.id!).subscribe(   
    (resposta)=>{
      this.livro = resposta
  } )
}

update(){
  this.service.update(this.livro).subscribe( (resposta)=>{
    this.router.navigate([`categorias/${this.id_cat}/livros`])
    this.service.mensagem("Livro Atualizado Com Sucesso!")
  }, 
  err =>{
    this.router.navigate([`categorias/${this.id_cat}/livros`])
    this.service.mensagem("Erro ao Atualizar o Livro!")
  })
}

cancelar(): void{
  this.router.navigate([`categorias/${this.id_cat}/livros`])
}


}
