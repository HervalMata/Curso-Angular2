
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AlunoFormComponent } from "app/alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs/Observable";
import { IFormCanDeactivate } from "app/guards/form.candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
        component: IFormCanDeactivate, 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): Observable<boolean> | boolean {
            console.log('guarda de desativação');

        //return component.podeMudarRota();

        return component.podeDesativar();
    }
}