import { Client, ClientList } from './../models/client';
import { ProjectList, Project } from './../models/projects';
import { Schedule, WorkItem } from './../models/schedule';


export class DataHelper{
    
    clientList:ClientList = new ClientList;
    client:Client = new Client;
    projectList:ProjectList = new ProjectList;
    project:Project = new Project;
    schedule:Schedule = new Schedule;
    //workItem:WorkItem = new WorkItem;
    
    constructor() {
        //console.log("DataHelper.constructor()");


    }

}