import { Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent {
  sessionRunning = true;

  session = {
    date: '24 Mar 2026',
    start_time: '10:30 AM',
    end_time: '10:45 AM',
    total_time_seconds: 900
  };

  food = {
    name: 'Apple',
    total_count: 120,
    good_count: 100,
    bad_count: 20,
    avg_confidence_good: 95,
    avg_confidence_bad: 82
  };

  ngAfterViewInit(){

    if(!this.sessionRunning){

      const pie = echarts.init(document.getElementById('foodChart')!);

      pie.setOption({
        title:{text:'Food Quality Distribution', left:'center'},
        tooltip:{trigger:'item'},
        series:[
          {
            type:'pie',
            radius:'60%',
            data:[
              {value:this.food.good_count,name:'Good Food'},
              {value:this.food.bad_count,name:'Bad Food'}
            ]
          }
        ]
      });


      const bar = echarts.init(document.getElementById('confidenceChart')!);

      bar.setOption({
        title:{text:'AI Confidence', left:'center'},
        xAxis:{
          type:'category',
          data:['Good Detection','Bad Detection']
        },
        yAxis:{type:'value'},
        series:[
          {
            type:'bar',
            data:[
              this.food.avg_confidence_good,
              this.food.avg_confidence_bad
            ]
          }
        ]
      });

    }

  }
}