


export class WorkItem{
    
    id: string = "";
    userid: string = "";

    date: string = "";
    day:string = "";
    start: string = "";
    end: string = "";
    subtract: string = "";
    hours: string = "";
    info: string = "";
    
    constructor(data:any) {
        //console.log("WorkItem.constructor()");
        //console.log(data)
        
        this.id = data.id;
        this.userid = data.userid;

        this.date = data.date;
        this.day = data.day;
        this.start = data.start;
        this.end = data.end;
        this.subtract = data.subtract;
        this.hours = data.hours;
        this.info = data.info;

    }



    update(data:any) {
        console.log("WorkItem.update()");
        
        this.start = data.start;
        this.end = data.end;
        this.subtract = data.subtract;
        this.hours = data.hours;
        this.info = data.info;

    }


    
}



export class Schedule{
    
}