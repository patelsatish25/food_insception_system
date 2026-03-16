import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


import { DashboradComponent } from './dashborad/dashborad.component';

import { SessionInfoComponent } from './session-info/session-info.component';
import { MatrialModule } from '../matrial/matrial.module';
import { pagesRoutingModule } from './pages-routing.module';
import { ComponenetsModule } from '../componenets/componenets.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FoodsComponent } from './foods/foods.component';
import { PastReportsComponent } from './past-reports/past-reports.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    LoginComponent,

    DashboradComponent,
     SessionInfoComponent,
     AnalyticsComponent,
     FoodsComponent,
     PastReportsComponent,
     UsersComponent
  ],
  imports: [
    CommonModule,
    MatrialModule,
    pagesRoutingModule,
    ComponenetsModule
  ],
 
})
export class PagesModule { }
