import { Component } from '@angular/core';

@Component({
  selector: 'app-hardware-monitor',
  templateUrl: './hardware-monitor.component.html',
  styleUrls: ['./hardware-monitor.component.css']
})
export class HardwareMonitorComponent {

  cpuTemp = 27.8;
  cpuUsage = 72.4;
  gpuTemp = 54;

  ramUsed = 9.4;
  ramTotal = 15.4;
  ramPercent = 60;

  diskUsed = 65;
  diskTotal = 233;
  diskPercent = 28;

  systemUptime = "3h 52m 16s";
  softwareUptime = "0m 51s";

  ipAddress = "192.168.10.81";

}