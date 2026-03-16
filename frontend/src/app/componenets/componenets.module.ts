import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatrialModule } from '../matrial/matrial.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SessionAnalysisComponent } from './session-analysis/session-analysis.component';







@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SessionAnalysisComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatrialModule
  ],
  exports:[SidebarComponent,
    HeaderComponent,
    SessionAnalysisComponent
  ]
})
export class ComponenetsModule { }
