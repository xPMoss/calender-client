// Angular
import { Injectable } from '@angular/core';

// Services
import { UserService } from "../services/user.service";
import { CalenderService } from '../services/calender.service';

// Models
import { WorkItem } from "../models/schedule";
import { Calender } from '../models/calender';

@Injectable({ providedIn: 'root' })
export class CalenderController {

    
    isLoaded = async function task() {
        return new Promise(res => {
          setTimeout(res, Math.random() * 1000);
        })
    }
    
    workitems:WorkItem[] = [];
  
    constructor(public userService:UserService, public calenderService:CalenderService, public calender:Calender) {
        

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

  // ----- | CRUD | ----- //
    async getItems() {
      //console.log("CalenderComponent.getItems()")

      /*
      let data = await this.calenderService.getItems("workitem");
      console.log(data)
      
      return data;
      */

      let data = await this.calenderService.getItems("workitem", this.userService.user.uid)


      if(data.length < 1){
          console.log("No data")
          
      }

      //console.log("return data: ")
      //console.log(data)

      var keys = Object.keys(data);
      //console.log(keys)

      return data;

  }
  
  async getItem(item:any) {
    let data = await this.calenderService.getItem(item, "workitem", this.userService.user.uid);
    //console.log(data)
    

    console.log("getItem")
    console.log(data)


    return data[0];
  }
  
  async createItem(item:any){
    //await this.calenderService.creatWorkitem(item);
    await this.calenderService.createItem(item, "workitem", this.userService.user.uid);
  }
    
  async setItem(item:any){
    await this.calenderService.setItem(item, "workitem", this.userService.user.uid);

  }
    
  async deleteItem(item:any){
    await this.calenderService.deleteItem(item, "workitem", this.userService.user.uid);

  }
      
  // ----- | FUNCTIONS | ----- //

    // Load saved worked hours
    async loadItems():Promise<boolean>{
      //console.log("CalenderComponent().loadItems()");
      let data = await this.getItems();

      for (let i = 0; i < data.length; i++) {
          this.workitems.push(new WorkItem(data[i]))
          
      }


      for (let i = 0; i < data.length; i++) {
          //let id = data[i].id;
          let date = data[i].date;

          for (let j = this.calender.startYear; j < this.calender.endYear; j++) {
              let year = this.calender.years[j];

              for (let k = 0; k < year.days.length; k++) {
                  //let dayId = year.days[k].id;
                  let dayDate = year.days[k].date;

                  

                  if (dayDate == date) {
                      //console.log("found: " + dayId)

                      let item = new WorkItem(data[i])
 
                      //console.log(item)

                      // If not empty
                      if (item.start != "" && item.end != "" || item.start != undefined && item.end != undefined ) {
                          year.days[k].calcHours();
          
                      }

                      year.days[k].id = item.id
                      year.days[k].start = item.start;
                      year.days[k].end = item.end;
                      year.days[k].subtract = item.subtract;
                      year.days[k].hours = item.hours;
                      year.days[k].info = item.info;
                      year.days[k].empty = false;
                      year.days[k].week.empty = false;

                      //console.log(year.days[k])

                  }

                  
              }
              
          }
          
      }

      // Calculate weeks and months
      for (let i = this.calender.startYear; i < this.calender.endYear; i++) {
          let year = this.calender.years[i];

          for (let j = 0; j < year.weeks.length; j++) {
              year.weeks[j].calcHours();
              
          }

          for (let j = 0; j < year.months.length; j++) {
              year.months[j].calcHours();
              
          }
          
      }


      if (data.length > 0) {
        return true;

      }
      else{
        return false;
        
      }


  }

  // Validate worked hours input
  validate(item:any, value:string, type:string){
      /*
      console.log("validate()")
      console.log(item)
      console.log("start: " + item.start)
      console.log("end: " + item.end)
      console.log("sub: " + item.subtract)
      */

      let isValidated = false;

      if (type == "start" || type == "end") {
          if (value.length == 2) {
              if(type == "start"){
                  item.start = value + ":";
              }
              if(type == "end"){
                  item.end = value + ":";
              }

          }

          if (value.length > 5) {
              if(type == "start"){
                  value = value.slice(0, -1);
                  item.start = value;
                  item.start.slice(0, -1)

              }
              if(type == "end"){
                  value = value.slice(0, -1);
                  item.end = value;
              }

          }


      }


      if (type == "start") {
          if (value.length == 5) {
              if (value[2] == ":") {
                  //console.log(":")
                  item.start = value;
                  isValidated = true;
              }
              
          }
          else{
              console.log("Validation ERROR!");
          }

      }

      if (type == "end"){
          if (value.length == 5) {
              if (value[2] == ":") {
                  item.end = value;
                  isValidated = true;
              }
              
          }
          else{
              console.log("Validation ERROR!");
          }

          if (value.length == 4) {
              while(value.charAt(0) === '0')
                  {
                      value = value.substring(1);
                      document.getElementById("end-input")?.setAttribute("value",value) 
                  }
              
          }
          else{
              console.log("Validation ERROR!");
          }
          
      }

      if (type == "sub"){
          if( isNaN( Number(value) ) ){
              //console.log("!not number!!");
          }
          else{
              //console.log("number!!");
          }


          if (Number(value) % 1 === 0 && value.length < 4) {
              //console.log(value + ' is a whole number');

              for (let i = 0; i < value.length; i++) {
                  let check = value[i];
                  //console.log(check);

                  if( isNaN( Number(check) ) ){
                      //console.log("not number!!");
                  }
                  else{
                      //console.log("number!!");
                  }
              }
              



              if (Number(value) > 0 && value[0] == "0") {
                  while(value.charAt(0) === '0')
                  {
                      value = value.substring(1);
                      item.subtract = value;
                  }
                  

              }

              if (Number(value) < 241) {
                  item.subtract = value;
                  isValidated = true;
              }
              else{
                  console.log("Validation ERROR!");
              }
              
          } 
          else {
              console.log("Validation ERROR!");
              console.log(value + ' is not a whole number or to big');

              
          }
          
      }

      

      return isValidated;

  }

  // Check if worked hours empty
  deleteCheck(item:any, value:string, type:string){


      if (Number(value) == 0) {
          if(type == "start"){
              item.start = value;

          }

          if(type == "end"){
              item.end = value;

          }

          if(type == "sub"){
              item.subtract = value;

          }

      }


      // Delete check
      let deleteCheck = [0,0,0,0]

      if (item.start == "0" || item.start == "") {
          deleteCheck[0] = 1;

          console.log("Start empty!")
      }

      if (item.end == "0" || item.end == "") {
          deleteCheck[1] = 1;

          console.log("End empty!")
      }

      if (item.subtract === "0" || item.subtract == "") {
          deleteCheck[2] = 1;

          console.log("Sub empty!")
      }

      console.log(item.info)
      if (item.info.trim().length === 0) {
          deleteCheck[3] = 1;

          console.log("Info empty!")
      }


      if (deleteCheck[0] == 1 && deleteCheck[1] == 1 && deleteCheck[2] == 1 && deleteCheck[3] == 1) {
          console.log("Delete!")
          return true;

      }
      else{
          console.log("Do not delete!")
          return false;
      }



  }

  // Calculate worked hours
  async calcSum(item:any, value:string, type:string){
      
      let isValidated = this.validate(item, value, type);
      let deleteCheck = this.deleteCheck(item, value, type);

      // <DEBUGGING> //
      // <---------> //
      console.log("start: " + item.start + ", end: " + item.end + ", break: " +item.subtract)
      // <---------> //


      // If validated
      if (isValidated == true && deleteCheck == false) {

          // Day
          item.calcHours();
          item.hours = item.hours;
          item.empty = false;

          // Week
          item.week.calcHours();
          item.week.empty = false;

          // Month
          item.month.calcHours();
          item.month.empty = false;



          // Check if item exists
          let item_new = new WorkItem(item);
          let returnedItem = await this.getItem(item_new);

          //console.log("item_new")
          //console.log(item_new)

          if (returnedItem) {
              console.log("FOUND ITEM!!!")
              await this.setItem(item_new);
          }
          else{
              console.log("ITEM NOT FOUND!!!")
              await this.createItem(item_new);

          }

          

      }
      
      if (deleteCheck) {
              this.clear(item)

      }

  }

  // Clear worked hours
  async clear(item:any){
      
      let returnedItem = await this.getItem(item);
      console.log(item)

      if (returnedItem) {
          returnedItem.start = "";
          returnedItem.end = "";
          returnedItem.subtract = "";
          returnedItem.hours = "";
          returnedItem.info = "";

          item.clear();

          //await this.setWorkitem(returnedItem);
          await this.deleteItem(returnedItem);

          //item.empty = true;

          //item.week.calcHours();
          //item.month.calcHours();
          
      }
      else{
          //await this.creatWorkitem(item);

      }

  }

  async setInfo(item:any, value:string){
      let type = "info";
      item.info = value;
      item.empty = false;
      
      let deleteCheck = this.deleteCheck(item, value, type);
      
      if (deleteCheck) {
          this.clear(item)

      }
      else{           
          // Check if item exists
          let item_new = new WorkItem(item);
          let returnedItem = await this.getItem(item_new);

          console.log("item_new")
          console.log(item_new)

          if (returnedItem) {
              console.log("FOUND ITEM!!!")
              await this.setItem(item_new);
          }
          else{
              console.log("ITEM NOT FOUND!!!")
              await this.createItem(item_new);

          }

      }


  }



  
}