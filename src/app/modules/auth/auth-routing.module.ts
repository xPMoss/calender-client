import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPage } from './auth.page';
import { LoginPage } from './pages/login/login.page';
import { LogoutPage } from './pages/logout/logout.page';


const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' }, // redirect to 
  { path:"login", component: LoginPage, data: { page: {id: 'login' } } },
  { path:"logout", component: LogoutPage, data: { page: {id: 'logout' } } },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  constructor(){
    console.log(this.constructor.name)

  }

}
