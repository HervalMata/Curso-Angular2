import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
//import { CursosComponent } from "app/cursos/cursos.component";
import { LoginComponent } from "app/login/login.component";
import { ModuleWithProviders } from "@angular/core";
//import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
//import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent }//,
    //{ path: 'cursos', component: CursosComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    //{ path: 'curso/:id', component: CursoDetalheComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}