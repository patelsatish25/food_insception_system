import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastReportsComponent } from './past-reports.component';

describe('PastReportsComponent', () => {
  let component: PastReportsComponent;
  let fixture: ComponentFixture<PastReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
