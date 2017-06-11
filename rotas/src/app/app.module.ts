import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { routing } from "app/app.routing";
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from "app/cursos/cursos.service";
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from "app/app.routing.module";
import { AuthService } from "app/login/auth.service";
import { AuthGuard } from "app/guards/auth-guard";
import { CursosGuard } from "app/guards/cursos.guard";
import { AlunosGuard } from "app/guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { CursosModule } from "app/cursos/cursos.module";
//import { AlunosComponent } from './alunos/alunos.component';
//import { AlunosModule } from "app/alunos/alunos.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent//,
    //AlunosComponent//,
    //CursosComponent,
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule
    //routing
  ],
  providers: [
    AuthService, 
    AuthGuard,
    CursosGuard,
    AlunosGuard
    ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
