import { Component, Input, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
selector:'app-session-analysis',
templateUrl:'./session-analysis.component.html',
styleUrls:['./session-analysis.component.css']
})
export class SessionAnalysisComponent implements AfterViewInit{

@Input() session:any;

ngAfterViewInit(){

setTimeout(()=>{

this.createFoodChart();
this.createConfidenceChart();
this.createTimelineChart();

},100);

}

createFoodChart(){

const chart = echarts.init(
document.getElementById('foodChart'+this.session.id)!
);

chart.setOption({

tooltip:{trigger:'item'},

series:[
{
type:'pie',
radius:['45%','70%'],
data:[
{
value:this.session.food_inspection.good_count,
name:'Good Food'
},
{
value:this.session.food_inspection.bad_count,
name:'Bad Food'
}
]
}
]

});

}

createConfidenceChart(){

const chart = echarts.init(
document.getElementById('confidenceChart'+this.session.id)!
);

chart.setOption({

tooltip:{},

xAxis:{
type:'category',
data:['Good Confidence','Bad Confidence']
},

yAxis:{
type:'value',
max:1
},

series:[
{
type:'bar',
data:[
this.session.food_inspection.avg_confidence_good,
this.session.food_inspection.avg_confidence_bad
],
itemStyle:{
color:'#6c5ce7'
}
}
]

});

}

createTimelineChart(){

const chart = echarts.init(
document.getElementById('timelineChart'+this.session.id)!
);

chart.setOption({

tooltip:{},

xAxis:{
type:'category',
data:['0s','2s','4s','6s','8s']
},

yAxis:{
type:'value'
},

series:[
{
type:'line',
smooth:true,
data:[5,12,18,10,20],
areaStyle:{}
}
]

});

}

}