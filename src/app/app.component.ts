import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDebugging:boolean = false;
  
  title = 'app';


  constructor(){
    console.log(this.constructor.name)
    
  };



  ngOnInit() {

  }
  
}
