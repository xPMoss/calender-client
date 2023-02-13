



class Task{


    Id: string = "";
    Name: string = "";
    Client: string = "";
    Project: string = "";
    Info: string = "";
    IsComplete: boolean = false;

}


export class TaskList{
    Id: string = "";
    UserId: string = "";
    c_task: Task[] = [];
    
    constructor() {
        console.log("Todo.constructor()");


    }

}