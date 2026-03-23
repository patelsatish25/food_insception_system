import { Component, Input, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
selector:'app-session-analysis',
templateUrl:'./session-analysis.component.html',
styleUrls:['./session-analysis.component.css']
})
export class SessionAnalysisComponent implements AfterViewInit{

@Input() session:any;

ngOnInit(){
console.log("Session data in analysis component:", this.session);
}
ngAfterViewInit(){
console.log(this.session)
setTimeout(()=>{

this.createFoodChart();
this.createConfidenceChart();


},100);

}

createFoodChart(){

const chart = echarts.init(
document.getElementById('foodChart'+this.session._id)!
);

chart.setOption({

tooltip:{trigger:'item'},

series:[
{
type:'pie',
radius:['45%','70%'],
data:[
{
value:this.session.good,
name:'Good Food',
itemStyle:{color:'#27ae60'}
},
{
value:this.session.bad,
name:'Bad Food',
itemStyle:{color:'#e74c3c'}
}
]
}
]

});

}

createConfidenceChart(){

const chart = echarts.init(
document.getElementById('confidenceChart'+this.session._id)!
);

chart.setOption({

tooltip:{},

xAxis:{
type:'category',
data:['Good Confidence','Bad Confidence']
},

yAxis:{
type:'value',
max:100
},

series:[
{
type:'bar',
data:[
{value:this.session.confidence*100,itemStyle:{color:'#27ae60'}},
{value:(1 - this.session.confidence)*100,itemStyle:{color:'#e74c3c'}}
],
label:{
show:true,
position:'top',
formatter:(params:any)=>{
return Math.round(params.value)+'%';
}
}
}
]

});

}


}