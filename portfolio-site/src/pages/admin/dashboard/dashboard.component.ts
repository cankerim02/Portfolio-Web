import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard-admin.service';
import { CalendarWrapperComponent } from '../calendar-wrapper/calendar-wrapper.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,CalendarWrapperComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalProjects = 0;
  totalMessages = 0;
  repliedMessages = 0;

   constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getDashboardMetrics().subscribe(data => {
      this.totalProjects = data.totalProjects;
      this.totalMessages = data.totalMessages;
      this.repliedMessages = data.repliedMessages;
    });
  }
}
