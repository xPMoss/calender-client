import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { from, Observable, throwError, Subject } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Component({
  selector: 'login-button',
  template: `<a class="btn" (click)="login()">Logga in</a>`
})
export class LoginButtonComponent {
  //<a class="col-auto nav-link" *ngIf="auth.isAuthenticated$ | async as isAuthenticated" routerLink="profile">Profile</a>
  private user = new Subject();
  public user$ = this.user.asObservable();

  constructor(public auth: AuthService) {
    this.user$ = this.auth.user$;

  }

  isauth:Observable<boolean> = this.auth.isAuthenticated$;
  

  ngOnInit() {
    //console.log(this.isauth.subscribe)
    /*console.log(this.auth.getUser().subscribe(
      {
        next(num) {
        console.log(num)
        },
        complete() {
        // Will not be called, even when cancelling subscription.
        console.log('completed!');
        }
        }
    )
    );*/

    console.log(this.user$);

  }


  login() {
    this.auth.loginWithRedirect().subscribe((result) => {
      console.log(this.user$);
      console.log('User Logged in as: ', result +  ", " +  this.user$);
      //this.authService.user.next(result) // add this!
      //....
      
   });
    
  }
}