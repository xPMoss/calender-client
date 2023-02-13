import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';

//import { AuthGuard } from '@auth0/auth0-angular';
//import { AuthGuard } from "./auth/auth.guard";

//
import { AuthPage } from "./modules/auth/auth.page";
import { MainPage } from "./modules/main/main.page";



import { ErrorComponent } from './error/error.component'

const routes: Routes = [
  { path: '', component: MainPage, loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), data: {page: { skip: true }},  canActivate: [AuthGuard] },

  { path: 'error', component: ErrorComponent },
  { path: 'auth', component: AuthPage, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), data: {page: { skip: true }} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  isDebugging:boolean = false;
  
  constructor(){
    if(this.isDebugging)console.log(this.constructor.name)
    
  }
}


