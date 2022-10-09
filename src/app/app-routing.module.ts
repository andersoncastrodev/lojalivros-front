import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Aqui se Cria as Rotas */
const routes: Routes = [

    /*Criando a primeira ROTA */
    {
      path: '',
      component: HomeComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
