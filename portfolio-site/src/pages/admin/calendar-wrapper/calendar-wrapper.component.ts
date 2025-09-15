import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { DashboardService } from '../../../services/dashboard-admin.service';

@Component({
  selector: 'app-calendar-wrapper',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  template: `
    <full-calendar [options]="calendarOptions"></full-calendar>
  `,
  styleUrls: ['./calendar-wrapper.component.css']
})
export class CalendarWrapperComponent implements OnInit{
@Input() events: any[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events:[] // Başlangıçta boş, ngOnInit'te API'den doldurulacak
  };

 constructor(private dashboardService: DashboardService) {}

   ngOnInit() {
    this.dashboardService.getCalendarEvents().subscribe({
      next: (res) => {
        const eventsWithDates = res.map(e =>
        ({ ...e,
          start: e.start ? new Date(e.start) : null,
           end: e.end ? new Date(e.end) : null
          }));
        // API’den gelen veriyi direkt events olarak set et
        this.calendarOptions = { ...this.calendarOptions, events: eventsWithDates };
      },
      error: (err) => console.error('Takvim verisi alınamadı', err)
    });
  }
}
