import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "app/login/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('AuthGuard');


    return this.verificarAcesso();
    
  }

private verificarAcesso(){
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route) : Observable<boolean> | boolean {
    console.log('canLoad: verificando se o usuário pode Carregar o código do módulo');


    return this.verificarAcesso();
  }

}
