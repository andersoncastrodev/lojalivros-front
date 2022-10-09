import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

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
import { HomeComponent } from './components/views/home/home.component';
/* Fim*/

/*Meus Importes do Projeto. Icones*/
import {MatCardModule} from '@angular/material/card';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
/* Fim*/

/*Meu Importes do Projeto. Table*/
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent, CategoriaReadComponent],
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
