
// Angular
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){
    console.log(this.constructor.name)
    
  };
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean
    {
    console.log('CanActivate called');
    console.log(this.constructor.name)

    let isLoggedIn = this.authService.isAuthenticated();

    if (isLoggedIn){
      return true
    } 
    else {
      this.router.navigate(['auth'])
      return false;
    }

  }
  
}