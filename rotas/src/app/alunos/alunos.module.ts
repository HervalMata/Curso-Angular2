import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosService } from "app/alunos/alunos.service";
import { FormsModule } from "@angular/forms";
import { AlunosDeactivateGuard } from "app/guards/alunos.deactivate.guard";
import { AlunoDetalheResolver } from "app/alunos/guards/aluno-detalhe.resolver";

@NgModule({
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    imports: [ CommonModule,
                FormsModule,
               AlunosRoutingModule
     ],
    exports: [],
    providers: [
        AlunosService,
        AlunosDeactivateGuard,
        AlunoDetalheResolver
    ],
    bootstrap: []
})
export class AlunosModule {}