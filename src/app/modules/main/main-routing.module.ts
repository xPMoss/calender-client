import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';


import { MainPage } from "./main.page";
import { CalenderPage } from "./pages/calender/calender.page";
import { ProfilePage } from "./pages/profile/profile.page";



const routes:Routes = [
  { path: '',   redirectTo: '/calender', pathMatch: 'full' }, // redirect to 
  { path: "calender", component: CalenderPage },
  { path: "profile", component: ProfilePage },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { 
  isDebugging:boolean = false;
  
  constructor(){
    if(this.isDebugging)console.log(this.constructor.name)
    
  }

}

// imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],