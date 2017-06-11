
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Aluno } from "app/alunos/aluno";
import { AlunosService } from "app/alunos/alunos.service";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService) {}
    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ) : Observable<any> | any {

        console.log('AlunoDetalheResolver');

        let id = route.params['id'];
        return this.alunosService.getAluno(id);
    }
}