import { Client, ClientList } from './client';

export class ProjectList{
    
    Id: string = "";
    UserId: string = "";
    projects: Project[] = [];
    
    constructor() {
        //console.log("ProjectList.constructor()");


    }

}

export class Project{
    
    Id: string = "";
    name: string = "";
    client:Client | undefined;
    info: string = "";
    IsComplete: boolean = false;
    
    constructor() {
        //console.log("Project.constructor()");


    }

}