import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

/*IMPORTANTE PARA CONECTAR COM API o BackEnd */
import { HttpClientModule } from "@angular/common/http";

/*Meus Importes do Projeto.*/
import { MatToolbarModule } from "@angular/material/toolbar";
/* Fim*/

import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";

/*Meus Importes do Projeto. NavBar*/
import { MatSidenavModule } from "@angular/material/sidenav";
/* Fim*/

/*Meus Importes do Projeto. Lista*/
import { MatListModule } from "@angular/material/list";
/* Fim*/

/*Meus Importes do Projeto. Icones*/
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from './components/template/home/home.component';
/* Fim*/

/*Meus Importes do Projeto. Icones*/
import {MatCardModule} from '@angular/material/card';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
/* Fim*/

/*Meu Importes do Projeto. Table*/
import {MatTableModule} from '@angular/material/table';

/*Meu Modulo de Botao */
import {MatButtonModule} from '@angular/material/button';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';

/*Import do Form (Formulario) Esse foi manual. */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/*Import do Campos de Texto. */
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent, CategoriaReadComponent, CategoriaCreateComponent, CategoriaDeleteComponent, CategoriaUpdateComponent, LivroReadAllComponent, LivroCreateComponent, LivroUpdateComponent, LivroDeleteComponent, LivroReadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    /*Meu import */
    MatToolbarModule,

    /*Meu import NavBar*/
    MatSidenavModule,

    /*Meu import List*/
    MatListModule,

    /*Meu import Icone*/
    MatIconModule,

    /*Meu import Icone*/
    MatCardModule,
    
    /*Meu import Tabela*/
    MatTableModule,

    HttpClientModule,

    MatButtonModule,

    FormsModule,

    MatFormFieldModule,

    MatInputModule,

    MatSnackBarModule,

    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
