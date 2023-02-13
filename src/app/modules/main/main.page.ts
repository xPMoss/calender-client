// Angular
import { Component  } from '@angular/core';



// Services
import { AuthService, User } from '@auth0/auth0-angular';
import { UserService } from "./services/user.service";

@Component({
  selector: 'main-page',
  templateUrl: './main.page.html'
})
export class MainPage {
  isDebugging:boolean = false;
  
  title = 'Main';

  constructor(public userService:UserService){
    if(this.isDebugging)console.log(this.constructor.name);

      
  }


  ngOnInit() {
    

  }


 
}



