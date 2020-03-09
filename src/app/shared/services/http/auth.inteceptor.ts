import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AuthService } from '@shared/services/guards/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("Intercepting");
    //return next.handle(req)
    return from(this.authService.retrieveIdToken()).pipe(
      mergeMap( token => {
        req = req.clone({
          setHeaders: {
            'Authorization': `${token}`
          }
        });
        return next.handle(req);
      })
    );
  }
}