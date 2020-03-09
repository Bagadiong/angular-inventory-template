import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Auth } from 'aws-amplify';
import { JwtHelperService } from "@auth0/angular-jwt";
import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Bool } from 'aws-sdk/clients/clouddirectory';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  myVariable: any;
  constructor() { }

  public isAuthenticated(): Promise<boolean> {
    return this.retrieveIdToken()
      .then(token => {
        // console.log(token);
        const helper = new JwtHelperService();
        return token !== null && !helper.isTokenExpired(token);
      })
      .catch(() => {
        console.log("no session")
        return false;
      });
  }

  public retrieveIdToken(): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.currentSession()
        .then(data => {
          if (data.isValid()){
            resolve(data.getIdToken().getJwtToken());
          }
          else{
            reject({message: "Session Invalid."});
          }
        })
        .catch(err => reject({message: "Session Invalid."}));
    });
  }

  isVerified(){
    return from(Auth.currentAuthenticatedUser())
  }
}