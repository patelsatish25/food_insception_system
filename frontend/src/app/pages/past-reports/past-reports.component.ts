import { Component } from '@angular/core';

@Component({
  selector: 'app-past-reports',
  templateUrl: './past-reports.component.html',
  styleUrls: ['./past-reports.component.css']
})
export class PastReportsComponent {

filteredSessions = [

{
id:1,

session:{
date:"12 Mar 2026",
start_time:"2:49 PM",
end_time:"2:53 PM",
total_time_seconds:209,
status:"Completed"
},

food_inspection:{
name:"Apple",
category:"Fruit",
total_count:35,
good_count:30,
bad_count:5,
avg_confidence_good:0.94,
avg_confidence_bad:0.61,
detected_at:"2:50 PM"
},

showAnalysis:false
},

{
id:2,

session:{
date:"11 Mar 2026",
start_time:"2:10 PM",
end_time:"2:25 PM",
total_time_seconds:900,
status:"Completed"
},

food_inspection:{
name:"Banana",
category:"Fruit",
total_count:42,
good_count:40,
bad_count:2,
avg_confidence_good:0.96,
avg_confidence_bad:0.58,
detected_at:"2:15 PM"
},

showAnalysis:false
}

];

toggleSession(session:any){
session.showAnalysis = !session.showAnalysis;
}

}