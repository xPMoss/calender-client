// Angular
import { Injectable } from '@angular/core';

// firebase
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Services

// Models

@Injectable({ providedIn: 'root' })
export class CalenderService {
  isDebugging:boolean = false;

  constructor(private db:AngularFireDatabase) {
    if(this.isDebugging)console.log(this.constructor.name);

    //google-oauth2|116709753550013423577
    //this.copyData("workitem", "2", "google-oauth2|116709753550013423577")
  }

  // COPY FROM ONE LIST TO OTHER
  async copyData(type:any, fromID:any, uid:string){

    // Fetch
    let items = await new Promise<any>((resolve)=> {
      try{
        this.db.list(type + "_" + fromID).valueChanges().subscribe( data => resolve(data) )
       } 
       catch(e){
        console.log(e)

       }
      
    })

    // Set
    for (const data of items) {
      this.db.list(type + "_" + uid).update(data.id, data);
    }


    

  }

  // GET //
  async getItems(type:any, uid:string) {
    console.log(this.constructor.name + ".getItems()");

    let items = new Promise<any>((resolve)=> {
      try{
        this.db.list(type + "_" + uid).valueChanges().subscribe( data => resolve(data) )
       } 
       catch(e){
        console.log(e)

       }
      
    })


    return items;

  }

  // GET/:id //
  async getItem(item:any, type:any, uid:string){

    let obj = new Promise<any>((resolve)=> {
      this.db.list(type + "_" + uid, ref => ref.orderByChild('id').equalTo( item.id ) ).valueChanges().subscribe( data => resolve(data) )
    })

    
    

    return obj

  }

  // POST //
  async createItem(item:any, type:any, uid:string){
    console.log("CalenderService.createItem()");

    item.userid = uid;
    
    this.db.list(type + "_" + uid).update(item.id, item);


  }

  // PUT //
  async setItem(item:any, type:any, uid:string) {
    console.log("CalenderService.setItem()");

    item.userid = uid;

    this.db.list(type + "_" + uid).update(item.id, item);



  }

  // DELETE //
  async deleteItem(item:any, type:any, uid:string) {
    console.log("CalenderService.deleteItem()");

    this.db.list(type + "_" + uid).remove(item.id);

  }
  //

  // ----- | HELPER FUNCTIONS | ----- //
  manageErrors(response:any) {  
    if(!response.ok){ 
          const responseError = { 
            statusText: response.statusText,
            status: response.status
          };
          throw(responseError);
      }
      return response;
  }




  
}