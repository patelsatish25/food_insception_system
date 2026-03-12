import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.css']
})
export class SessionInfoComponent implements OnInit {

  foodData = [
    {
    food:{
      session: {
        id: 1,
        user_id: 101,
        date: "2026-03-11",
        start_time: "10:00:00",
        end_time: "10:30:00",
        total_time_seconds: 1800,
        temperature: 25.5,
        status: "completed"
      },
      food_inspection: {
        category: "Fruit",
        name: "Apple",
        total_count: 20,
        good_count: 18,
        bad_count: 2,
        avg_confidence_good: 0.95,
        avg_confidence_bad: 0.60,
        detected_at: "2026-03-11T10:05:10"
      }
    }
    }
    ];

    chartOption: any;

    ngOnInit() {
      const inspection = this.foodData[0].food.food_inspection;

        this.chartOption = {
      tooltip: {
        trigger: 'item'
      },

      legend: {
        bottom: 10
      },

      series: [
        {
          name: 'Inspection Result',
          type: 'pie',
          redius: ['50%', '70%'],
          avoidLabelOverlap: false,

          label: {
            show: true,
            formatter: '{b}: {c}'
          },

          itemStyle:{
            borderRadius: 5
          },

         data: [
          {value: inspection.good_count, name: 'Good', itemStyle: {color: '#28a745'}},
          {value: inspection.bad_count, name: 'Bad', itemStyle: { color: '#dc3545'}}
         ]
        }
      ]
      
    };
    }

}
