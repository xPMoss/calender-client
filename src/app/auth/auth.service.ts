
// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    isLoggedIn = false;

    constructor(private http: HttpClient) { 
      console.log(this.constructor.name)

    }


    userLogout(): void {
      this.isLoggedIn = false;
         localStorage.removeItem('isUserLoggedIn'); 
    }

    login(username: string, password: string): Observable<any> {
      console.log(this.constructor.name + ".login()")
      console.log(AUTH_API)
      return this.http.post(AUTH_API + 'signin', {
        username,
        password
      }, httpOptions);
    }

    register(username: string, email: string, password: string): Observable<any> {
      console.log("register();")
      return this.http.post(AUTH_API + '.signup', {
        username,
        email,
        password
      }, httpOptions);
    }



    isAuthenticated(){
        return this.isLoggedIn;
    }

}