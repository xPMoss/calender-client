// Angular
import { Component, Input } from '@angular/core';

// Services
import { CalenderService } from "../../services/calender.service";
import { CalenderController } from "../../controllers/calender.controller";

// Models
import { WorkItem } from "../../models/schedule";
import { Calender } from '../../models/calender';


@Component({
  selector: 'view-item',
  templateUrl: './view-item.component.html',
})
export class ViewItemComponent {
    isDebugging:boolean = false;

    constructor(public calender:Calender){
        if(this.isDebugging)console.log(this.constructor.name);

    }


  ngOnInit() {
    
  }

  // ----- | VIEW/NAV | ----- //
  changeView(level:string){
    if (level == "year") {
        this.calender.view.year = true;
        this.calender.view.month = false;
        this.calender.view.week = false;
        this.calender.view.day = false;

    }

    if (level == "month") {
        this.calender.view.year = false;
        this.calender.view.month = true;
        this.calender.view.week = false;
        this.calender.view.day = false;

    }

    if (level == "week") {
        this.calender.view.year = false;
        this.calender.view.month = false;
        this.calender.view.week = true;
        this.calender.view.day = false;

    }

    if (level == "day") {
        this.calender.view.year = false;
        this.calender.view.month = false;
        this.calender.view.week = false;
        this.calender.view.day = true;

    }


}


}
