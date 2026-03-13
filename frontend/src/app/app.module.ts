import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatrialModule } from './matrial/matrial.module';



@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PagesModule,
    MatrialModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
