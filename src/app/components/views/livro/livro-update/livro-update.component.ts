import { Livro } from './../livro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  /*Criando uma verifica de dados Melhor. */
  titulo = new FormControl('',[Validators.minLength(3)])
  nomeAutor = new FormControl('',[Validators.minLength(3)])
  texto = new FormControl('',[Validators.minLength(10)])

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
  }

  cancelar(): void{
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }
  
  /*Metodo reponsavel por mostra os errros na tela.  */
  getMessage(){
    if(this.titulo.invalid){
      return "O campo Titulo deve conter 3 a 100 Carateres";
    }
   
    if(this.nomeAutor.invalid){
      return "O campo Nome do Autor deve conter 3 a 100 Carateres";
    }
   
    if(this.texto.invalid){
      return "O campo Texto deve conter 10 a 10000 Carateres";
    }
    return false;
    
  }

}
