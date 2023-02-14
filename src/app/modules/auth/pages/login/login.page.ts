// Angular
import { Component } from '@angular/core';

// Ion

// Models

// Services
import { AuthService } from '@auth0/auth0-angular';

// Helpers


@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',

})
export class LoginPage {
  constructor(public authService: AuthService) { 
   

  }

  SignIn(email, psw){
    
    //this.authService.login(email.value, psw.value);
    
  }



  
  ngOnInit(){
    // DEBUGGING // REMOVE

    
  }






}
