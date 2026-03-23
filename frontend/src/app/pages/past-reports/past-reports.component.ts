import { Component, OnInit } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-past-reports',
  templateUrl: './past-reports.component.html',
  styleUrls: ['./past-reports.component.css']
})
export class PastReportsComponent implements OnInit {

constructor(private api:FoodsService,private socket: SocketService){}
  ngOnInit(){
    this.socket.listen("new-session")
    .subscribe(()=>{
      console.log("New session detected, reloading past reports...");
      this.loadPastReports();
    });

    this.loadPastReports();
  }

  loadPastReports(){  
    console.log("Fetching past reports...");
    this.api.getFoods().subscribe((data:any)=>{
      console.log("Past reports data:", data.foods);
      this.filteredSessions = data.foods;
      
    });
  }
filteredSessions: any[] = [];

toggleSession(session:any){
  // Close all other sessions first
  this.filteredSessions.forEach(s => {
    if(s !== session) {
      s.showAnalysis = false;
    }
  });
  // Then toggle the clicked session
  session.showAnalysis = !session.showAnalysis;
}

}