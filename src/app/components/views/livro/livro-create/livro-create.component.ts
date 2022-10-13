import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {
 
  /*Criando uma verifica de dados Melhor. */
  titulo = new FormControl('',[Validators.minLength(3)])
  nome_autor = new FormControl('',[Validators.minLength(3)])
  texto = new FormControl('',[Validators.minLength(10)])

  constructor() { }

  ngOnInit(): void {
  }

  /*Metodo reponsavel por mostra os errros na tela.  */
  getMessage(){
    if(this.titulo.invalid){
      return "O campo Titulo deve conter 3 a 100 Carateres";
    }
   
    if(this.nome_autor.invalid){
      return "O campo Nome do Autor deve conter 3 a 100 Carateres";
    }
   
    if(this.texto.invalid){
      return "O campo Texto deve conter 10 a 10000 Carateres";
    }
    return false;
    
  }

}
