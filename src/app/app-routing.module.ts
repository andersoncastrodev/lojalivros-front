import { HomeComponent } from './components/template/home/home.component';
import { Component, createPlatform, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';

/* Aqui se Cria as Rotas */
const routes: Routes = [

    /*Criando a primeira ROTA */
    {
      path: '',
      component: HomeComponent
    }
    ,

    /*Criando a Segunda ROTA (Categorias)*/
    {
      path: 'categorias',
      component: CategoriaReadComponent
    }
    ,
    {
      path: 'categorias/create',
      component: CategoriaCreateComponent
    }
    ,
    {
      path: 'categorias/delete/:id',
      component: CategoriaDeleteComponent
    }
    ,
    {
      path: 'categorias/update/:id',
      component: CategoriaUpdateComponent 
    }
    ,
    {
      path: 'categorias/:id_cat/livros',
      component: LivroReadAllComponent
    }
    ,
    {
      path: 'categorias/:id_cat/livros/create',
      component: LivroCreateComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
