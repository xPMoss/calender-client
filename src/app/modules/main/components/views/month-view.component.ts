// Angular
import { Component, Input } from '@angular/core';

// Services
import { CalenderController } from "../../controllers/calender.controller";

// Models


@Component({
    selector: 'month-view-item',
    templateUrl: './month-view.component.html',
  })
  export class MonthViewComponent {
    isDebugging:boolean = false;
  
    @Input() calender:any;  
    
    constructor(public calenderController:CalenderController){}

  
    ngOnInit() {
      
    }
  
  
  }