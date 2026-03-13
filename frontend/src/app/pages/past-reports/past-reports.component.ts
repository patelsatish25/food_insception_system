import { Component } from '@angular/core';

@Component({
selector: 'app-past-reports',
templateUrl: './past-reports.component.html',
styleUrls: ['./past-reports.component.css']
})
export class PastReportsComponent {

sessions = [

{
id:1,
date:"2026-03-12",
totalFoods:35,
categories:["Fruit","Vegetable","Fast Food"],
duration:"10 minutes"
},

{
id:2,
date:"2026-03-11",
totalFoods:42,
categories:["Fruit","Vegetable"],
duration:"15 minutes"
},

{
id:3,
date:"2026-03-10",
totalFoods:20,
categories:["Fast Food"],
duration:"8 minutes"
}

];

filteredSessions = [...this.sessions];

filterByDate(event:any){

const selectedDate = event.value;

this.filteredSessions = this.sessions.filter(session =>
session.date === selectedDate?.toISOString().split('T')[0]
);

}

}