// Angular
import { Component, Input } from '@angular/core';

// Services
import { CalenderController } from "../../controllers/calender.controller";

// Models


@Component({
    selector: 'year-view-item',
    templateUrl: './year-view.component.html',
  })
  export class YearViewComponent {
    isDebugging:boolean = false;
    @Input() calender:any;  
    
    constructor(public calenderController:CalenderController){}
  
  
    ngOnInit() {
      

    }
  
  
  
  }