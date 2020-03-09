import { AuthService } from '@shared/services/guards/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.isAuthenticated()
      .then(result => {
        if(result){
          return true;
        }
        else {
          console.log(result);
          window.location.replace(environment.signIn);
          return false;
        }
      });
  }

}