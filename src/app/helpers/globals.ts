

// Angular
import { Injectable } from '@angular/core';

import { User } from "../modules/main/models/user.model";

@Injectable({ providedIn: 'root' })
export class Globals{
    isLoggedIn:boolean = false;

    user:User;
    


    constructor(){
        console.log(this.constructor.name + "()")
        
    }
}