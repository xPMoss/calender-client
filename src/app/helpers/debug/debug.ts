// Angular
import { Component, Input, Output, EventEmitter, resolveForwardRef  } from '@angular/core';

// rxjs
import { interval, timer, Observable, take, isObservable, throwError, Subject} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


// Services
import { UserService } from "../../modules/main/services/user.service";

// Models

@Component({
  selector: 'debug-component',
  templateUrl: './debug.html'
})
export class Debug {
  public isDebugging:boolean = true;

    constructor() {
       

    }


    ngOnInit() {


    }






}



