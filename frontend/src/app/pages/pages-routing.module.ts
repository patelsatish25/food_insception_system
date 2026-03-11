import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { NgModule } from "@angular/core";
import { DashboradComponent } from "./dashborad/dashborad.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path :'dashboard', component:DashboradComponent}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pagesRoutingModule
{

}