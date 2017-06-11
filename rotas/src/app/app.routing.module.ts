import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
//import { CursosComponent } from "app/cursos/cursos.component";
import { LoginComponent } from "app/login/login.component";
import { ModuleWithProviders } from "@angular/core";
//import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
//import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "app/guards/auth-guard";
import { CursosGuard } from "app/guards/cursos.guard";
import { AlunosGuard } from "app/guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "app/pagina-nao-encontrada/pagina-nao-encontrada.component";

const appRoutes: Routes = [
    { path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        //canActivateChild: [AlunosGuard]
        canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent},
    //{ path: 'cursos', component: CursosComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    //{ path: 'curso/:id', component: CursoDetalheComponent }
    { path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}