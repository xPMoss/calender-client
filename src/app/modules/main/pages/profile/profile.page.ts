// Angular
import { Component } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

// Services
import { UserService } from "../../services/user.service";

// Models


@Component({
  selector: 'profile-page',
  templateUrl: './profile.page.html',
    
})
export class ProfilePage {
  isDebugging:boolean = false;
  
  constructor(public userService:UserService) {
    if(this.isDebugging)console.log(this.constructor.name);


  }

  

  ngOnInit() {
    //let user = await this.getUser();
    //this.setUser(user)
    //this.getUsers();

  }


  
}