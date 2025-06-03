// Angular
import { Component, Input } from '@angular/core';

// Services
import { CalenderController } from "../../controllers/calender.controller";

// Models


@Component({
    selector: 'day-view-item',
    templateUrl: './day-view.component.html',
  })
  export class DayViewComponent {
    isDebugging:boolean = false;
    
    @Input() calender:any;  
    hours:any[] = [];
    
    constructor(public calenderController:CalenderController){
      console.log(this.constructor.name);

    }

  
    ngOnInit() {
      //console.log(this.constructor.name + ".ngOnInit()");
    
      this.calc();
    }

    async task() {
      return new Promise(res => {
        setTimeout(res, Math.random() * 5000);
      })
    }

    async calc(){
      //console.log(this.constructor.name + ".calc()");

      let waitForIt = async() => {
        const promises = new Array(100).fill(0).map(this.calenderController.isLoaded);
    
        console.log("Loading...")
        await Promise.all(promises);
        console.log("Loading Finished")
      
      }
      await waitForIt();

      let day:any = this.calender.offset.day;

      //console.log(day)
      //console.log(day.date)
      //console.log("start")
      //console.log(day.start)
      //console.log(day.end)
      //console.log(day.subtract)
      //console.log("start")

      var date1 = new Date(day.date + ":" + day.start);
      var date2 = new Date(day.date + ":" + day.end);
      
      //console.log(date1);

      let temp = date2.getTime() - date1.getTime();
      let difference = temp / (1000 * 3600) * 60;
      let variance = (difference % 60)

      //console.log(variance)

      difference = difference/60;

      for (let i = 0; i < difference; i++) {
        let name;

        let x = i + date1.getHours()

        if (x < 10) {
          name = "0" + x.toString();

        }
        else{
          name = x.toString();

        }

        this.hours.push( name + ":" +  variance.toString() );
        
      }

      //console.log(difference)

      //console.log(this.constructor.name + ".calc() END");

      
    }
    
  
  }