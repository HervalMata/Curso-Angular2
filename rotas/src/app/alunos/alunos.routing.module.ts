import { RouterModule } from '@angular/router';
import { AlunosComponent } from "app/alunos/alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { NgModule } from "@angular/core";
import { AlunosGuard } from "app/guards/alunos.guard";
import { AlunosDeactivateGuard } from "app/guards/alunos.deactivate.guard";
import { AlunoDetalheResolver } from "app/alunos/guards/aluno-detalhe.resolver"

const alunosRoutes = [
    { path: '', component: AlunosComponent, 
    canActivateChild: [AlunosGuard],
    children : [
        { path: 'novo', component: AlunoFormComponent },
         { path: ':id', component: AlunoDetalheComponent,
            resolve: { aluno: AlunoDetalheResolver }
        },
         { path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
         }
    ]}   
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}