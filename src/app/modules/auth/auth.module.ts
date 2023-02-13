
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginPage } from './pages/login/login.page';

//----- | USER PROFILE | -----//


import { Globals } from "./../../helpers/globals";


@NgModule({
  declarations: [
    AuthPage,
    LoginPage,


  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    
  ],
  providers: [
    Globals
    
  ],
  bootstrap: [],

})
export class AuthModule {}
