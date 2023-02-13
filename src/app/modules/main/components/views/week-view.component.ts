// Angular
import { Component, Input } from '@angular/core';

// Services
import { CalenderController } from "../../controllers/calender.controller";

// Models


@Component({
  selector: 'week-view-item',
  templateUrl: './week-view.component.html',
})
export class WeekViewViewComponent {
  isDebugging:boolean = false;
  @Input() calender:any;  

  constructor(public calenderController:CalenderController){}


  ngOnInit() {
    
  }



}
