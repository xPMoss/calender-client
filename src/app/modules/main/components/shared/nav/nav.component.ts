import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
  
})
export class NavComponent {
  isDebugging:boolean = false;
  isLoggedOut$: Observable<boolean> | undefined;
  showLogin:boolean = true;

  constructor(public auth: AuthService){
    if(this.isDebugging)console.log(this.constructor.name);
  }

    

  ngOnInit() {
    this.isLoggedOut$ = this.auth.isAuthenticated$;
      
    //console.log(this.isLoggedOut$)

  }




}
