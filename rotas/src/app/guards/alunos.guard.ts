import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AlunosGuard implements CanActivateChild {
    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> | boolean {
           //console.log(route);
           //console.log(state);
           console.log('AlunosGuard: Guarda de Rota filha');
            if (state.url.includes('editar')) {
                //alert('Usuário sem acesso');
                //return false;
            }
        return true;
    }
}