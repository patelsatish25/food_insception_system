import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { FoodsService } from 'src/app/services/foods.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
selector:'app-analytics',
templateUrl:'./analytics.component.html',
styleUrls:['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit,AfterViewInit{

constructor(
private api:FoodsService,
private socket:SocketService
){}

stats:any={};

/* chart instances */

pieChart:any;
foodChart:any;
lineChart:any;



/* INIT SOCKET + FIRST API */

ngOnInit(){

this.loadAnalytics();

/* SOCKET LISTENER */

this.socket.listen("new-session")
.subscribe(()=>{

console.log("New session detected");

/* RECALL API */

console.log("Reloading analytics...");
this.loadAnalytics();

});

}



/* CREATE CHARTS ONLY ONCE */

ngAfterViewInit(){

this.pieChart = echarts.init(document.getElementById('pieChart')!);
this.foodChart = echarts.init(document.getElementById('foodChart')!);
this.lineChart = echarts.init(document.getElementById('lineChart')!);

}



/* LOAD DATA */

loadAnalytics(){

this.api.getDashboardAnalytics()
.subscribe((res:any)=>{

this.stats = res.summary;

this.updateCharts(res);

});

}



/* UPDATE CHARTS */

updateCharts(res:any){

this.updatePieChart(res.summary);
this.updateFoodChart(res.foodDistribution);
this.updateLineChart(res.detectionTrend);

}



/* PIE */

updatePieChart(data:any){

this.pieChart.setOption({

tooltip:{trigger:'item'},

series:[{
type:'pie',
radius:'65%',

data:[
{value:data.goodFood,name:'Good Food',itemStyle:{color:'#22c55e'}},
{value:data.badFood,name:'Bad Food',itemStyle:{color:'#ef4444'}}
]

}]

});

}



/* FOOD DISTRIBUTION */

updateFoodChart(data:any){

this.foodChart.setOption({

tooltip:{trigger:'axis'},

legend:{
data:['Good Food','Bad Food']
},

xAxis:{
type:'category',
data:data.map((x:any)=>x._id)
},

yAxis:{
type:'value'
},

series:[

{
name:'Good Food',
type:'bar',
stack:'total',
data:data.map((x:any)=>x.good),
itemStyle:{color:'#22c55e'}
},

{
name:'Bad Food',
type:'bar',
stack:'total',
data:data.map((x:any)=>x.bad),
itemStyle:{color:'#ef4444'}
}

]

});

}



/* TREND */

updateLineChart(data:any){

this.lineChart.setOption({

xAxis:{
type:'category',
data:data.map((x:any)=>x._id)
},

yAxis:{type:'value'},

series:[{
type:'line',
smooth:true,
data:data.map((x:any)=>x.count),

areaStyle:{
color:new echarts.graphic.LinearGradient(
0,0,0,1,
[
{offset:0,color:'#6366f1'},
{offset:1,color:'#8b5cf6'}
]
)
}

}]

});

}

}