import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Hub, Auth } from 'aws-amplify';
import { environment } from '@environments/environment';
import { AuthService } from '@shared/services/guards/auth.service';
import { RouteService } from '@shared/services/guards/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  constructor(
    private router: Router,
    private routeService: RouteService,
    private authService: AuthService,
    private ngZone: NgZone
  ){}

  ngOnInit() {
    if(this.routeService.getPreviousUrl() == '/login'){
      this.routing()
    }else{
      this.loading = true;
      Hub.listen('auth', (data) => {
        switch (data.payload.event) {
            case 'signIn':
                console.log('now the user is signed in');
                this.routing()
                break;
            case 'signIn_failure':
                console.log('now the user is fail in');
                this.routing()
                break;
            default:
                break;
        }
      });
    }
  }

  // data = user PROFILE
  routing() {
      this.authService.isVerified().subscribe(data => {
        this.update(true)
      },
      err => {
        this.update(false)
      }
    );
  }

  update(isAuthenticated){
    if (isAuthenticated){
      this.ngZone.run(() => this.router.navigate(['dashboard']));
    }
    else {
      window.location.replace(environment.signIn);
    }
  }

}
