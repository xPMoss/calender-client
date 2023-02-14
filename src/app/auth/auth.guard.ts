
// Angular
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AuthGuard as auth0 } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router){
    
    console.log(this.constructor.name)
    
    
  };
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean
    {
    console.log('CanActivate called');
    console.log(this.constructor.name)

    let isLoggedIn = this.authService.isAuthenticated$;

    this.authService.getUser().subscribe( (user) => {
      console.log("user")
      console.log(user)
    })

    if (isLoggedIn){
      return true
    } 
    else {
      this.router.navigate(['auth'])
      console.log("user")
     
      return false;
    }

  }
  
}