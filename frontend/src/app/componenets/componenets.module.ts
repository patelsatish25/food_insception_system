import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatrialModule } from '../matrial/matrial.module';
import { HeaderComponent } from './header/header.component';






@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
  
   
  ],
  imports: [
    CommonModule,
    MatrialModule
  ],
  exports:[SidebarComponent,
    HeaderComponent
  ]
})
export class ComponenetsModule { }
