// Angular
import { Component, Input } from '@angular/core';

// Services
import { CalenderService } from "../../services/calender.service";
import { CalenderController } from "../../controllers/calender.controller";

// Models
import { WorkItem } from "../../models/schedule";
import { Calender } from '../../models/calender';

@Component({
  selector: 'prev-btn-item',
  templateUrl: './prev-btn.component.html',
})
export class PrevBtnComponent {

    constructor(public calenderController:CalenderController, public calender:Calender){}

  ngOnInit() {
    
  }


// >>
changeTime(direction:string){
  let type;
  let increment = 0;
  let dayIndex = 0;
  let co = this.calender.offset;

  // Set increment steps
  if (this.calender.view.year == true) {
      type = "year";
      increment = 365;
  }

  if (this.calender.view.month == true) {
      type = "month";
      increment = this.calender.years[co.year.index].months[co.month.index].days.length;
  }

  if (this.calender.view.week == true) {
      type = "week";
      increment = 7;
  }

  if (this.calender.view.day == true) {
      type = "day";
      increment = 1;
  }

  //console.log("increment: " + increment)

  // Find current day
  for (let i = 0; i < this.calender.years[co.year.index].days.length; i++) {
      let day = this.calender.years[co.year.index].days[i];

      if (day.id == co.day.id) {
          // <DEBUGGING> //
          // <---------> //
          //console.log("cDay found!")
          //console.log(day)
          //console.log(this.calender.cDay)

          //console.log(this.calender.years[this.calender.offset.year.index].days.indexOf(this.calender.offset.day))
          // <---------> //
          
          dayIndex = this.calender.years[co.year.index].days.indexOf(co.day);

          // <DEBUGGING> //
          // <---------> //
          //console.log("<----- || ----->")
          // <---------> //

      }
      
  }

  
  // Iterate 
  //console.log("//----- Iterate -----//")
  let t_dayIndex = dayIndex;
  let steps = 0;
  
  for (let i = 0; i < increment; i++) {
      if (direction == "+") {
          dayIndex++;
          steps++;
      }
      else{
          dayIndex--;
          steps++;
      }

      //console.log("dayIndex:" + dayIndex)
      //console.log("steps:" + steps)
      //console.log("def:" + (increment-steps))

      // If att start of year
      if (dayIndex < 0) {
          // <DEBUGGING> //
          // <---------> //
          //console.log("Prev year")
          // <---------> //

          let index = this.calender.years[co.year.index-1].days.length-1;
          index -= increment-steps;

          this.calender.offset.day = this.calender.years[co.year.index-1].days[index];

      }  // If att end of year
      else if(dayIndex > this.calender.years[co.year.index].days.length-1){
          // <DEBUGGING> //
          // <---------> //
          //console.log("Next year")
          // <---------> //
          
          let index = 0;
          index += increment-steps;

          this.calender.offset.day = this.calender.years[co.year.index+1].days[index];

      } // Else
      else{ 
          this.calender.offset.day = this.calender.years[co.year.index].days[dayIndex];

      }
      
  }

  // Set offsets
  this.calender.offset.year = co.day.year;
  this.calender.offset.month = co.day.month;
  this.calender.offset.week = co.day.week;
  
  // <DEBUGGING> //
  // <---------> //
  //console.log("<----- OFFSETS ----->")
  //console.log(this.calender.years[this.calender.offset.year.index])
  //console.log("Offset year: " + this.calender.offset.year.index)
  //console.log("Offset month: " + this.calender.offset.month.name)
  //console.log("Offset week: " + this.calender.offset.week.index)

  //console.log("Offset index: " + dayIndex)
  //console.log("Offset day: " + this.calender.offset.day.index)
  //console.log(this.calender.offset.day)


  
  
  // <---------> //

}
// << //
}
