import { Component, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements AfterViewInit {

  stats = {
    totalSessions: 45,
    totalFood: 1200,
    goodFood: 1000,
    badFood: 200
  };

  ngAfterViewInit() {
    this.initPieChart();
    this.initBarChart();
    this.initLineChart();
  }

  initPieChart() {

    const chart = echarts.init(document.getElementById('pieChart')!);

    chart.setOption({

      tooltip: { trigger: 'item' },

      color: ['#4f46e5', '#f97316'],

      series: [{
        type: 'pie',
        radius: '65%',
        data: [
          { value: 1000, name: 'Good Food' },
          { value: 200, name: 'Bad Food' }
        ]
      }]
    });

  }

  initBarChart() {

    const chart = echarts.init(document.getElementById('barChart')!);

    chart.setOption({

      xAxis: {
        type: 'category',
        data: ['Fruit', 'Vegetable', 'Fast Food']
      },

      yAxis: {
        type: 'value'
      },

      series: [{
        data: [300, 200, 150],
        type: 'bar',

        itemStyle: {
          color: '#5a67ff',
          borderRadius: [6,6,0,0]
        }
      }]
    });

  }

  initLineChart() {

    const chart = echarts.init(document.getElementById('lineChart')!);

    chart.setOption({

      xAxis: {
        type: 'category',
        data: ['Mon','Tue','Wed','Thu','Fri']
      },

      yAxis: {
        type: 'value'
      },

      series: [{
        data: [20,35,15,40,30],
        type: 'line',
        smooth: true,

        areaStyle:{
          color: new echarts.graphic.LinearGradient(
            0,0,0,1,
            [
              {offset:0,color:'#6a11cb'},
              {offset:1,color:'#2575fc'}
            ]
          )
        }
      }]
    });

  }

}