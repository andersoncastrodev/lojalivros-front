import { Router, Routes } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria.model';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  /*Aqui onde vai fica os dados vindo da API */
  categorias: Categoria[] = []
  
  /*Colocando o cabeçalho da Tabela */
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];


  constructor( private service: CategoriaService, private router: Router ) { }

  /* Sempre que a paniga iniciar chama isso aqui. */
  ngOnInit(): void {
    this.findAll();
  }


  findAll() {

    this.service.findAll().subscribe( 
      resposta => {
        console.log(resposta);
        this.categorias = resposta
      }
      
    )
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }
}
