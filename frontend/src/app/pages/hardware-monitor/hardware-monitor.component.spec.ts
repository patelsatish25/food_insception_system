import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareMonitorComponent } from './hardware-monitor.component';

describe('HardwareMonitorComponent', () => {
  let component: HardwareMonitorComponent;
  let fixture: ComponentFixture<HardwareMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
