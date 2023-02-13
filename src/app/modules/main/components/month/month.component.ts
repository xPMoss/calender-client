// Angular
import { Component, Input } from '@angular/core';

// Services
import { CalenderController } from "../../controllers/calender.controller";

// Models


@Component({
    selector: 'month-component',
    templateUrl: './month.component.html',
  })
  export class MonthComponent {
    isDebugging:boolean = false;
  
    @Input() calender:any;  
    
    constructor(public calenderController:CalenderController){}

  
    ngOnInit() {
      
    }
  
  
  }