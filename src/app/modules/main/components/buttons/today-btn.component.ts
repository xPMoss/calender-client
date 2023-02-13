// Angular
import { Component, Input } from '@angular/core';

// Services
import { CalenderService } from "../../services/calender.service";
import { CalenderController } from "../../controllers/calender.controller";

// Models
import { WorkItem } from "../../models/schedule";
import { Calender } from '../../models/calender';

@Component({
  selector: 'today-btn-item',
  templateUrl: './today-btn.component.html',
})
export class TodayBtnComponent {


  constructor(public calenderController:CalenderController, public calender:Calender){}


  ngOnInit() {
    
  }


  changeTimeToday(){
    this.calender.offset.year = this.calender.cYear;
    this.calender.offset.month = this.calender.cMonth;
    this.calender.offset.week = this.calender.cWeek;
    this.calender.offset.day = this.calender.cDay;
  }    


}
