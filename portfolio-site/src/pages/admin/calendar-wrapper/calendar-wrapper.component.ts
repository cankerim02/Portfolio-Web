import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/dashboard-admin.service';

@Component({
  selector: 'app-calendar-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.css']
})
export class CalendarWrapperComponent implements OnInit{

@Input() events: any[] = [];
currentMonth : Date = new Date(); // gösterilen ay
calenderDays:Date [] = [];

 constructor(private dashboardService: DashboardService) {}

   ngOnInit() {
    this.generateCalendarDays(this.currentMonth); //Bugunün ayını ve günlerini oluştur

    //Apiden etkinlikleri çek ve takvime ekle
    this.dashboardService.getCalendarEvents().subscribe({
      next: (res) => {
        this.events = res.map(e =>
        ({ ...e,
          start: e.start ? new Date(e.start) : null,
           end: e.end ? new Date(e.end) : null
          }));
      },
      error: (err) => console.error('Takvim verisi alınamadı', err)
    });

   }
     generateCalendarDays(baseDate: Date) {
      const year = baseDate.getFullYear();
      const month = baseDate.getMonth();
      const startOfMonth = new Date(year,month, 1);
      const endOfMonth = new Date(year, month + 1, 0);

      this.calenderDays =[];

      //Ayın ilk gününün haftadaki indexi (0=Pazar, 1=Pazartesi..)
       const firstDayIndex = (startOfMonth.getDay() + 6) % 7; // Pzt = 0, Cmt = 5, Paz = 6
      for(let day = 1; day < firstDayIndex; day++) {
        this.calenderDays.push(null as any); //Boş günler
      }
        // Ayın günlerini ekle
      for (let day = 1; day <= endOfMonth.getDate(); day++) {
        this.calenderDays.push(new Date(year, month, day));
      }
    }

    prevMonth() {
      this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
      this.generateCalendarDays(this.currentMonth);
    }

nextMonth() {
      this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
      this.generateCalendarDays(this.currentMonth);
    }


    isEventDay(day : Date) {
    return this.events.some(ev => {
      const evDate = ev.start;
      return evDate &&
             evDate.getDate() === day.getDate() &&
             evDate.getMonth() === day.getMonth() &&
             evDate.getFullYear() === day.getFullYear();
    })
  }
}

