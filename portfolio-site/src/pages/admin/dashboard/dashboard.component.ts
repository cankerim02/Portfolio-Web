import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
// İleride API'den çekip göstereceğin metrikler için alanlar
  totalProjects = 0;
  totalMessages = 0;
  repliedMessages = 0;
}
