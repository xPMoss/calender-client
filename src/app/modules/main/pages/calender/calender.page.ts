// Angular
import { Component, Input, Output, EventEmitter, resolveForwardRef  } from '@angular/core';

// rxjs
import { interval, timer, Observable, take, isObservable, throwError, Subject} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

// Services
import { UserService } from "../../services/user.service";

import { CalenderController } from "../../controllers/calender.controller";

// Models
import { WorkItem } from "../../models/schedule";
import { Calender } from '../../models/calender';



@Component({
  selector: 'calender-page',
  styleUrls: ['./calender.page.css'],
  templateUrl: './calender.page.html'
})
export class CalenderPage {
    isDebugging:boolean = false;
    
    title = 'Calender';
    loaded:boolean = false;

    constructor(
        public calenderController:CalenderController, 
        public calender:Calender,
        public userService:UserService

        ){
        if(this.isDebugging)console.log(this.constructor.name);

        this.userService.setUser().then(()=>{
            this.calenderController.loadItems();
        })
  

    }


    ngOnInit() {
        // Set items
        
        

    }



}



