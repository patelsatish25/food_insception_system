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

@NgModule({
  declarations: [
    LoginComponent,

    DashboradComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    pagesRoutingModule,
    ReactiveFormsModule
  ],
 
})
export class PagesModule { }
