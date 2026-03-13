import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


import { DashboradComponent } from './dashborad/dashborad.component';

import { SessionInfoComponent } from './session-info/session-info.component';
import { MatrialModule } from '../matrial/matrial.module';
import { pagesRoutingModule } from './pages-routing.module';
import { ComponenetsModule } from '../componenets/componenets.module';

@NgModule({
  declarations: [
    LoginComponent,

    DashboradComponent,
     SessionInfoComponent
  ],
  imports: [
    CommonModule,
    MatrialModule,
    pagesRoutingModule,
    ComponenetsModule
  ],
 
})
export class PagesModule { }
