// Angular
import { Component } from '@angular/core';

// Ion

// Models

// Services
import { AuthService } from '@auth0/auth0-angular';

// Helpers


@Component({
  selector: 'logout-page',
  templateUrl: 'logout.page.html',

})
export class LogoutPage {
  constructor(public authService: AuthService) { 
   

  }



  
  ngOnInit(){
    // DEBUGGING // REMOVE

    
  }






}
