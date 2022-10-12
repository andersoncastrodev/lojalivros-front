import { HomeComponent } from './components/views/home/home.component';
import { Component, createPlatform, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
