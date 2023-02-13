
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';

// Pages
import { MainPage } from './main.page';
import { CalenderPage } from './pages/calender/calender.page';
import { ProfilePage } from './pages/profile/profile.page';

// Components
import { AuthenticationButtonComponent } from "../main/components/authentication/authentication-button.component";
import { LoginButtonComponent } from "../main/components/login/login-button";
import { LogoutButtonComponent } from "../main/components/logout/logout-button";
//----- | CALENDER | -----//
// Calender/Buttons
import { PrevBtnComponent } from './components/buttons/prev-btn.component'
import { NextBtnComponent } from './components/buttons/next-btn.component'
import { TodayBtnComponent } from './components/buttons/today-btn.component'
// Calender/Items
import { ViewItemComponent } from './components/view-item/view-item.component'
// Calender/Views
import { YearViewComponent } from './components/views/year-view.component'
import { MonthViewComponent } from './components/views/month-view.component'
import { MonthComponent } from './components/month/month.component'

import { WeekViewViewComponent } from './components/views/week-view.component'
import { DayViewComponent } from './components/views/day-view.component'
//----- | NAVIGATION | -----//
import { NavComponent } from "./components/shared/nav/nav.component";

// Services
import { UserService } from '../main/services/user.service'
import { NavService } from "./components/shared/nav/nav.service";
import { CalenderService } from './services/calender.service'


import { Globals } from "./../../helpers/globals";
import { CalenderController } from "./controllers/calender.controller";
import { Calender } from "./models/calender";

@NgModule({
    declarations: [
        MainPage,
        CalenderPage,
        ViewItemComponent,
        YearViewComponent,
        MonthViewComponent,
        MonthComponent,
        WeekViewViewComponent,
        DayViewComponent,
        ProfilePage,
        PrevBtnComponent,
        NextBtnComponent,
        TodayBtnComponent,
        NavComponent,
        AuthenticationButtonComponent,
        LoginButtonComponent,
        LogoutButtonComponent,

    ],
    imports: [
      CommonModule,
      FormsModule,
      MainRoutingModule,

    ],
    providers: [
      UserService,
      CalenderService,
      CalenderController,
      NavService,
      Globals,
      Calender,

    ],
    bootstrap: [],
  
  })
  export class MainModule {}
  