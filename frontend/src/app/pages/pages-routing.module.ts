import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { NgModule } from "@angular/core";
import { DashboradComponent } from "./dashborad/dashborad.component";
import { SessionInfoComponent } from "./session-info/session-info.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { FoodsComponent } from "./foods/foods.component";
import { PastReportsComponent } from "./past-reports/past-reports.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },


  {path:'analytics', component:AnalyticsComponent},
  {path:'foods', component:FoodsComponent},
  {path:'pastreports', component:PastReportsComponent},
  {path:'users', component:UsersComponent}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pagesRoutingModule
{

}