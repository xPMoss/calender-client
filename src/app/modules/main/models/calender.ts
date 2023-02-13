
class Year{

    index:number = 0;

    id:number = 0;

    months:Month[] = [];
    weeks:Week[] = [];
    days:Day[] = [];
    hours:string = "";

    leapyear:boolean = false;

    current:boolean = false;
    first:boolean = false;
    last:boolean = false;

    info:string = "";

    empty:boolean = true;

    constructor(id:number){
        this.id = id;
        this.index = id;

    }

    update(){
        console.log("Year.update()")

    }

}

class Month{

    index:number = 0;

    id:number = 0;
    name:string = "";
    nameShort:string = "";

    year:Year | any;


    weeks:Week[] = [];
    days:Day[] = [];
    hours:string = "";

    info:string = "";

    empty:boolean = true;

    current:boolean = false;
    first:boolean = false;
    last:boolean = false;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
        this.nameShort = name[0] + name[1] + name[2];
        this.index = Number(id)-1;

    }

    update(){
        console.log("Month.update()")
        this.calcHours();

        this.year.update();

    }

    calcHours(){

        let total = 0;

        for (let i = 0; i < this.weeks.length; i++) {
            let week = this.weeks[i];

            if (week.hours != "") {
                let temp = week.hours.split(" ")

                let hour:number = Number(temp[0].replace('h',''));
                let minute:number = Number(temp[1].replace('m',''));

                let hourstominute = hour*60;

                total += hourstominute + minute;

                hour = (total - (total % 60))/60;
                minute = total % 60;

            }

            

        }

        let tempHours = (total - (total % 60))/60;
        let tempMinutes = total % 60;
        this.hours = tempHours.toString() + "h " + tempMinutes.toString() + "m";

    }

}

class Week{

    index:number = 0;

    id:number = 0;

    year:Year | undefined;
    month:Month | any;

    days:Day[] = [];
    hours:string = "";

    info:string = "";

    empty:boolean = true;

    current:boolean = false;
    first:boolean = false;
    last:boolean = false;


    constructor(id:number){
        this.id = id;



    }

    update(){
        console.log("Week.update()")
        this.calcHours();

        this.month.update();


    }


    calcHours(){

        let total = 0;

        for (let i = 0; i < this.days.length; i++) {
            let day = this.days[i];

            if (day.hours != "") {
                let temp = day.hours.split(" ")

                let hour:number = Number(temp[0].replace('h',''));
                let minute:number = Number(temp[1].replace('m',''));

                let hourstominute = hour*60;

                total += hourstominute + minute;

                hour = (total - (total % 60))/60;
                minute = total % 60;

            }

            

        }
        let tempHours = (total - (total % 60))/60;
        let tempMinutes = total % 60;
        this.hours = tempHours.toString() + "h " + tempMinutes.toString() + "m";

    }

}

class Day{
    isDebugging:boolean = false;

    index:number = 0;

    id:string = "";

    calenderHours:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

    date:string = "";
    name:string = "";
    nameShort:string = "";
    day:number = 0;

    holiday:boolean = false;
    holidayName:string = "";

    year:Year | any;
    month:Month | any;
    week:Week | any;

    start:string = "";
    end:string = "";
    subtract:string = "";
    hours:string = "";

    info:string = "";

    empty:boolean = true;
    overlapping:boolean = true;

    current:boolean = false;
    first:boolean = false;
    last:boolean = false;

    constructor(id:string, name:string){
        if(this.isDebugging)console.log(this.constructor.name);

        this.id = id;
        this.name = name;
        this.nameShort = name[0] + name[1] + name[2];

    }

    update(){
        if(this.isDebugging)console.log(this.constructor.name + ".update()");
        
        this.week.update();

    }


    clear(){
        if(this.isDebugging)console.log(this.constructor.name + ".clear()");
        
        this.start = "";
        this.end = "";
        this.subtract = "";
        this.hours = "";

        this.info = "";

        this.empty = true;

        this.update();

    }

    calcHours(){
        if(this.isDebugging)console.log(this.constructor.name + ".calcHours()");

        let startList = this.start.split(":")
        let startHour:number = Number(startList[0]);
        let startMinute:number = Number(startList[1]);

        let start = startHour*60 + startMinute;

        let endList = this.end.split(":")
        let endHour:number = Number(endList[0]);
        let endMinute:number = Number(endList[1]);

        let end = endHour*60 + endMinute;
        
        let sub:number = Number(this.subtract);
        let subHour:number = (sub - (sub % 60))/60;
        let subMinute:number = sub % 60;
        
        let sum:number = 0;
        let sumHour:number = 0;
        let sumMinute:number = 0;

        let showHour:string = "";
        let showMinute:string = "";

        if (end >= start + sub) {
            
            sum = end -start -sub;

            sumHour = ((sum - (sum % 60))/60);
            sumMinute = (sum % 60);
            
            showHour = sumHour.toString();
            showMinute = sumMinute.toString();

            // Set params
            this.hours = showHour + "h " + showMinute + "m";

            if (showMinute == "00") {
                this.hours = showHour;
            }

        }
        

        


    }

    set setYear(year:Year) {
        this.year = year;
    }

    set setMonth(month:Month) {
        this.month = month;

    }



}

class Offset{

    year: Year | any;
    month: Month | any;
    week:Week | any;
    day:Day | any;


}

class View{
    year:boolean =  false;
    month:boolean =  false;
    week:boolean =  false;
    day:boolean =  false;

    iterate:number = 0;

    constructor(){
        if (this.iterate == 0) {
           this.year = true 
           this.month = false 
           this.week = false 
           this.day = false 
        }

        if (this.iterate == 1) {
            this.year = false 
            this.month = true 
            this.week = false 
            this.day = false 
         }

         if (this.iterate == 2) {
            this.year = false 
            this.month = false 
            this.week = true 
            this.day = false 
         }

         if (this.iterate == 3) {
            this.year = false 
            this.month = false 
            this.week = false 
            this.day = true 
         }


    }

}

// Angular
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Calender{

    startYear = 2020;
    endYear = 2026;

    years:Year[] = [];

    cYear: Year | any;
    cMonth: Month | any;
    cWeek: Week | any;
    cDay: Day | any;

    offset:Offset = new Offset();
    view:View = new View();
    
    weeksinmonth:number[] = [];
    weeksinyear:number[] = [];

    daytracker:number = 0;

    dayNames:string[] = [ "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag" ]
    dayNamesShort:string[] = [ "Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön" ]

    constructor(){
        // SET YEAR STARTYEAR - ENDYEAR
        this.years = [];

        this.createYears(this.startYear, this.endYear)
        
        // SET CURRENT DATES
        this.setCurrentDate();

        // <DEBUGGING> //
        // <---------> //
        //console.log(this.days)
        //console.log(this.weeks)
        //console.log(this.months)
        //console.log(this.years)
        
        
        /*
        for (let i = this.startYear; i < this.endYear-1; i++) {
            let y = this.years[i];
            let debugString = "";
            debugString += "--------------------------------------------\n";
            debugString += "| [Year: " + this.years[i].id + "] | ";
            debugString += "[Days: " + y.days.length + "] | ";
            debugString += "[Weeks: " + y.weeks.length + "] |\n";
            debugString += "--------------------------------------------\n";

            for (let j = 0; j < y.weeks.length; j++) {
                let w = y.weeks[j];

                for (let k = 0; k < w.days.length; k++) {
                    let d = w.days[k];

                    // <DEBUGGING> //
                    let nr = d.day.toString();
                    if (Number(nr) < 10) {
                        nr = "0" + nr;
                    }
                    let nrM = d.month.id.toString();
                    if (Number(nrM) < 10) {
                        nrM = "0" + nrM;
                    }
                    debugString += "[" + d.nameShort + " " + nr + "/" + nrM + "] | ";
                }

                let nrW = w.id.toString();
                if (Number(nrW) < 10) {
                    nrW = "0" + nrW;
                }
                debugString += "- (Week: " + nrW + ", Days: " + w.days.length + ")\n";
            }


            //console.log(debugString);

            
        }
        */
        //console.log(this)
        // <---------> //

        
    }

    createYears(start:number, end:number){
        for (let i = start-1; i < end+1; i++) {
            this.years[i] = new Year(i);

        }
        
        // MAIN SETUP
        this.createYearsMonthsWeeksDays(start-1, end+1);
        
        // SET MISSING DAYS IN WEEKS
        this.fixMissingWeekDays(start-1, end+1);

        // SET FIRST/LAST
        this.setFirstLast(this.endYear-1);

    }

    setStartAndEndWeeks(){
        let saew:any[] = [];

        saew[2018] = { weekStart: 1, weekEnd: 1, numberofweeks: 53 };
        saew[2019] = { weekStart: 1, weekEnd: 1, numberofweeks: 53 };
        saew[2020] = { weekStart: 1, weekEnd: 53, numberofweeks: 53 }; // LEAP
        saew[2021] = { weekStart: 53, weekEnd: 52, numberofweeks: 53 };
        saew[2022] = { weekStart: 52, weekEnd: 52, numberofweeks: 53 };
        saew[2023] = { weekStart: 52, weekEnd: 52, numberofweeks: 53 };
        saew[2024] = { weekStart: 1, weekEnd: 1, numberofweeks: 53 }; // LEAP
        saew[2025] = { weekStart: 1, weekEnd: 1, numberofweeks: 53 };
        saew[2026] = { weekStart: 1, weekEnd: 53, numberofweeks: 53 };
        saew[2027] = { weekStart: 53, weekEnd: 52, numberofweeks: 53 };
        saew[2028] = { weekStart: 52, weekEnd: 52, numberofweeks: 53 }; // LEAP
        saew[2029] = { weekStart: 1, weekEnd: 1, numberofweeks: 53 };
        saew[2029] = { weekStart: 1, weekEnd: 1, numberofweeks: 53 };

        return saew;

    }

    setStartDay(year:any){

        let startday:number = 5;

        // <DEBUGGING> //
        let dn:string[] = [ "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag" ]

        // <DEBUGGING> //
        let debugText = "";
        let leapyear:any[] = [];
        leapyear[2000] = true;
        
        // <DEBUGGING> //
        //console.log("----------||-----------")
        for (let i = 2001; i < year.id+1; i++) {

            
            if ( (i) % 4 == 0 ){
                leapyear[i] = true;

            }
            else{
                leapyear[i] = false;

            }

            startday++;
            // Next week
            if (startday > 6) {
                startday = 0;

            }

            if (leapyear[(i-1)] == true ) {
                startday++;
            }

            // Next week
            if (startday > 6) {
                startday = 0;

            }

            // <DEBUGGING> //
            let str = "";
            str += "Year: " + i + " | " +  dn[startday] 
            if (leapyear[i]) {
                str += " [" + leapyear[i] + "]";
            }
           // console.log(str)
 
        }
        
        /*
        // Set start day of year
        switch (year.id) {
            case 2017:
                startday = 6 // Söndag
                break;
            case 2018:
                startday = 0 // Måndag
                break;
            case 2019:
                startday = 1 // Tisdag
                break;
            case 2020:
                startday = 2 // Onsdag // LEAP
                break;
            case 2021:
                startday = 4 // Fredag
                break;
            case 2022:
                startday = 5 // Lördag
                break;
            case 2023:
                startday = 6 // Söndag
                break;
            case 2024:
                startday = 0 // Måndag // LEAP
                break;
            case 2025:
                startday = 2 // Onsdag
                break;
            case 2026:
                startday = 3 // Torsdag
                break;
            case 2027:
                startday = 4 // Fredag
                break;
            case 2028:
                startday = 5 // Lördag // LEAP
                break;
            case 2029:
                startday = 0 // Måndag
                break;
            case 2030:
                startday = 1 // Tisdag
                break;
        
            default:
                startday = 0 // Måndag
                break;
        }
        */

        return startday;

    }

    // SET CURRENT DATES
    setCurrentDate(){
        let today = new Date().toJSON().slice(0,10).replace(/-/g,'-');

        // Fix index offsets
        let temp_month = Number(today.split("-")[1]);
        //temp_month--;
        let temp_day = Number(today.split("-")[2]);
        //temp_day--;

        let date = temp_day.toString();
        let month = temp_month.toString();
        let year = today.split("-")[0];

        if (Number(date) < 10) {
            date = "0" + date;
        }

        if (Number(month) < 10) {
            month = "0" + month;
        }


        let cId = year+month+date;

        // <DEBUGGING> //
        // <---------> //
        //console.log(date)
        //console.log(month)
        //console.log(year)
        //console.log(cId)
        // <---------> //

        // Set current year, month, week, day
        for (let i = this.startYear; i < this.years.length; i++) {
            let t_year = this.years[i];

            for (let j = 0; j < t_year.days.length; j++) {
                let t_day = t_year.days[j];
    
                if (t_day.id == cId) {
                    //console.log("Found this day!!!")
                    this.cDay = t_day;
                    this.cMonth = t_day.month;
                    this.cWeek = t_day.week;
                    this.cYear = t_day.year;

                    this.offset.day = t_day;
                    this.offset.week = t_day.week;
                    this.offset.month = t_day.month;
                    this.offset.year = t_day.year;

                    this.offset.day.current = true;
                    this.offset.week.current = true;
                    this.offset.month.current = true;
                    this.offset.year.current = true;
                    
                }

            }
            
        }

    }

    setFirstLast(endYear:any){
        // SET FIRST/LAST
        let last_year = this.years[endYear];
        let last_month = last_year.months[last_year.months.length-1];
        let last_week = last_year.weeks[last_year.weeks.length-1];
        let last_day = last_year.days[last_year.days.length-1];

        last_year.last = true;
        last_month.last = true;
        last_week.last = true;
        last_day.last = true;

        let first_year = this.years[this.startYear];
        let first_month = first_year.months[0];
        let first_week = first_year.weeks[0];
        let first_day = first_year.days[0];

        first_year.first = true;
        first_month.first = true;
        first_week.first = true;
        first_day.first = true;
    }

    createYearsMonthsWeeksDays(start:number, end:number){

        // HELPER VARIABLES
        let dayNames:string[] = [ "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag" ]
        let daysinmonth:number[] = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ] 
        let monthNames:string[] = [
            "Januari",
            "Februari",
            "Mars",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "Augusti",
            "September",
            "Oktober",
            "November",
            "December"
        ];
        let holidays:any[] = [
            { date: "01", month: "01", name: "Nyårsdagen" },
            { date: "06", month: "01", name: "Trettondedag jul" },
            { date: "25", month: "12", name: "Juldagen" },
            { date: "26", month: "12", name: "Annandag jul" },

        ];



        // MAIN SETUP
        for (let i = start; i < end; i++) {
 
            let days:Day[] = [];
            let months:Month[] = [];
            let weeks:Week[] = [];


            // Set leapyear
            if ( (i) % 4 === 0 ){
                this.years[i].leapyear = true;
            }

            if (this.years[i].leapyear == true) {
                //this.daytracker++;
            }

            if ( (i) % 4 === 0 ){
                this.years[i].leapyear = true;
            }
            

            let daysinyear = 365;

            if(this.years[i].leapyear == true){
                daysinyear = 366;

            }
            else{
                daysinyear = 365;

            }

            // Set startday
            this.daytracker = this.setStartDay(this.years[i]);

            // ----- || ----- //
            // Set days in year
            for (let j = 0; j < daysinyear; j++) {

                days.push(new Day( j.toString(), dayNames[this.daytracker]) )

                if (dayNames[this.daytracker] == "Söndag") {
                    days[j].holiday = true;
                }

                if (j == 0) {
                    days[j].holiday = true;
                }
                
                days[j].year = this.years[i];

                // Date and Id
                days[j].date = this.years[i].id.toString() + "-" ;
                days[j].id = this.years[i].id.toString() + "" ;

                this.daytracker++
    
                // Next week
                if (this.daytracker > 6) {
                    this.daytracker = 0;

                }

            }

            // ----- || ----- //
            let startdayinmonth1 = 0;

            // Set ids and dates
            for (let j = 0; j < daysinmonth.length; j++) {
                

                if (this.years[i].leapyear == true && monthNames[j] == "Februari") {
                    daysinmonth[j] = 29;
                }
                else if(monthNames[j] == "Februari"){
                    daysinmonth[j] = 28;
                }

                let int = 1;

                for (let k = startdayinmonth1; k < daysinmonth[j] + startdayinmonth1; k++) {
                    let setDate:string = int.toString();
                    let setMonth:string = (j+1).toString();

                    if (j+1 < 10) {
                        setMonth = "0" + (j+1).toString();
                    }

                    if (int < 10) {
                        setDate = "0" + int.toString();
                    }

                    days[k].day = Number(setDate);
                    days[k].date += setMonth + "-" + setDate;
                    days[k].id += setMonth + "" + setDate;
                    days[k].index = Number(setDate)-1;

                    int++
                    
                }

                int = 1;

                startdayinmonth1 = startdayinmonth1 + daysinmonth[j];
                
            }

            let startdayinmonth2 = 0;
            let incday = 0;
    
            // Set months
            for (let j = 0; j < monthNames.length; j++) {
                months.push(new Month( j+1, monthNames[j]) )
                months[j].year = this.years[i];

                if (this.years[i].leapyear == true && monthNames[j] == "Februari") {
                    daysinmonth[j] = 29;
                }
                else if(this.years[i].leapyear == false && monthNames[j] == "Februari"){
                    daysinmonth[j] = 28;
                }

                
                for (let k = 0; k < daysinmonth[j]; k++) {
                    
                    months[j].days.push(days[incday]);
                    days[incday].month = months[j];
                    incday++;
                }

                startdayinmonth2 = daysinmonth[j];


            }

            // ----- || ----- //
            let StartAndEndWeeks = this.setStartAndEndWeeks();
            let weekInc = 1;

            // Set weeks
            for (let j = 0; j < StartAndEndWeeks[i].numberofweeks; j++) {
                if (StartAndEndWeeks[i].weekStart == 52 && j == 0) {
                    weeks.push(new Week(52))
                    weekInc = 0;
                }
                else if (StartAndEndWeeks[i].weekStart == 53 && j == 0) {
                    weeks.push(new Week(53))
                    weekInc = 0;
                }
                else if (StartAndEndWeeks[i].weekEnd == 1 && j == StartAndEndWeeks[i].numberofweeks-1) {
                    weeks.push(new Week(1))
                    weekInc = 0;
                }
                else{
                    weeks.push(new Week(weekInc))
                }
                
                weeks[j].index = j;
                weeks[j].year = this.years[i];
                this.years[i].weeks = weeks;

                weekInc++
    
            }

            // ----- || ----- //
            let weektracker = 0;
            
            // Set startday
            this.daytracker = this.setStartDay(this.years[i]);

            // <DEBUGGING> //
            let debugText = this.years[i].id + " ";
            debugText += "[" + daysinyear + "]\n";

            // Set days in weeks
            for (let j = 0; j < daysinyear; j++) {
  
                days[j].week = weeks[weektracker];

                weeks[weektracker].days.push(days[j]);

                // <DEBUGGING> //
                let nr = days[j].day.toString();
                if (Number(nr) < 10) {
                    nr = "0" + nr;
                }
                debugText += "[" + days[j].nameShort + ", " + nr + "/" + days[j].month.id + "],";

                this.daytracker++;

                // Next week
                if (this.daytracker > 6) {
                    this.daytracker = 0;
                    debugText += "(week: " + weeks[weektracker].id + ")\n";
                    weektracker++;

                }

            }

            // <DEBUGGING> //
            //console.log(debugText)

            // ----- || ----- //
            //Set Weeks in Months
            for (let j = 0; j < months.length; j++)  {
                let month = months[j];

                for (let k = 0; k < weeks.length; k++) {
                    let week = weeks[k];

                    for (let l = 0; l < month.days.length; l++) {
                        let day = month.days[l];

                        if(week.id == day.week.id && day.month.id == week.days[0].month.id){
                            //month.weeks.push(week);
                            //console.log(month.weeks.includes(week))

                            if (!month.weeks.includes(week)) {
                                month.weeks.push(week);
                                week.month = month;
                            }

                        }

                    }
 
                }

                // REMOVE DUPLICATES
                //month.weeks = [...new Set(month.weeks)];

            }
            
            
            

            // Set holidays
            for (let j = 0; j < daysinyear; j++) {
                let d = days[j];

                for (let k = 0; k < holidays.length; k++) {
                    let h = holidays[k]
                    
                    let compare = d.date.split("-");

                    if (compare[1] == h.month && compare[2] == h.date) {
                        //console.log("Found holiday")
                        d.holiday = true;
                        d.holidayName = h.name;
                    }
                    
                }
                
                
            }


            this.years[i].days = days;
            this.years[i].months = months;
            this.years[i].weeks = weeks;


        }




    }

    fixMissingWeekDays(start:number, end:number){
        // ----- || ----- //
        // SET MISSING DAYS IN WEEKS
        for (let i = start; i < end-1; i++) {
            if (this.years[i].id > this.startYear && this.years[i].id < this.endYear) {
                let weeks = this.years[i].weeks;
                // <DEBUGGING> //
                // <---------> //
                //console.log(this.years[i].id)
                // <---------> //

                // Setup partial weeks

                for (let j = 0; j < weeks.length; j++) {
                    let w = weeks[j];

                    if (w.days.length < 7) {
                        // <DEBUGGING> //
                        // <---------> //
                        //console.log("Week partial: " + w.id)
                        //console.log("Week length: " + w.days.length)
                        //console.log("missing days: " + (7 - w.days.length))

                        //console.log(w.days);
                        // <---------> //

                        let missing = (7 - w.days.length);

                        // First week
                        if (j == 0) {
                            for (let k = 0; k < missing; k++) {
                                //console.log(k);
                                
                                for (let l = 0; l < this.years[i-1].weeks[weeks.length-1].days.length; l++) {
                                    let day = this.years[i-1].weeks[weeks.length-1].days[l];
        
                                    if (day.id == this.years[i-1].id+"12" + (31-k)) {
                                        // <DEBUGGING> //
                                        // <---------> //
                                        //console.log("day");
                                        //console.log(day);
                                        // <---------> //

                                        w.days.unshift(day)
                                    }
                                    
                                }

                            }
                        
                        }
                    
                        for (let k = 0; k < w.days.length; k++) {
                            w.days[k].overlapping = true;
                            
                        }

                        // <DEBUGGING> //
                        // <---------> //
                        //console.log(w.days);
                        // <---------> //

                    }
                    else{
                        //console.log("Week: " + w.id)

                    }
                    
                }


            }
        }

        // !!! BUGFIXA TISDAG BÖRJAN PÅ VECKAN 2023 !!! //
        // SETUP MISSING DAYS IN WEEKS
        for (let i = start; i < end-1; i++) {
            //console.log(i)
            let weeks = this.years[i].weeks


            if (this.years[i].id > this.startYear && this.years[i].id < this.endYear) {
                // <DEBUGGING> //
                // <---------> //
                //console.log(this.years[i].id)
                // <---------> //

                // Setup partial weeks
                for (let j = 0; j < weeks.length; j++) {
                    let w = weeks[j];

                    if (w.days.length < 7) {
                        // <DEBUGGING> //
                        // <---------> //
                        //console.log("Week partial: " + w.id)
                        //console.log("Week length: " + w.days.length)
                        //console.log("missing days: " + (7 - w.days.length))

                        //console.log(w.days);
                        // <---------> //

                        let missing = (7 - w.days.length);


                        for (let k = 0; k < missing; k++) {
                            // <DEBUGGING> //
                            // <---------> //
                            //console.log("Last week");
                            //console.log(k);
                            //console.log(this.years[i+1].weeks[0].days.length);
                            // <---------> //
                            
                            for (let l = 0; l < this.years[i+1].weeks[0].days.length; l++) {
                                let day = this.years[i+1].weeks[0].days[l];
    
                                if (day.id == this.years[i+1].id+"010" + (1+k)) {
                                    // <DEBUGGING> //
                                    // <---------> //
                                    //console.log("day");
                                    //console.log(this.years[i+1].id+"010" + (1+k));
                                    // <---------> //

                                    w.days.push(day)
                                }
                                
                            }


                        }


                        for (let k = 0; k < w.days.length; k++) {
                            w.days[k].overlapping = true;
                            
                        }

                        // <DEBUGGING> //
                        // <---------> //
                        //console.log(w.days);
                        // <---------> //

                    }
                    else{
                        //console.log("Week: " + w.id)

                    }
                }

            }
            
        }


    }



}