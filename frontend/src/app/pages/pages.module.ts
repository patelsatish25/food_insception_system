import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DashboradComponent } from './dashborad/dashborad.component';

import {MatIconModule} from '@angular/material/icon';
import { pagesRoutingModule } from './pages-routing.module';
import { SessionInfoComponent } from './session-info/session-info.component';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [
    LoginComponent,

    DashboradComponent,
     SessionInfoComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    pagesRoutingModule,
    ReactiveFormsModule,
    NgxEchartsModule
  ],
 
})
export class PagesModule { }
