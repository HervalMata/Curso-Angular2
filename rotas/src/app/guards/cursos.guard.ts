
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class CursosGuard implements CanActivateChild {
    canActivateChild(
        childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> | boolean {
        return true;
    }
}