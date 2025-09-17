import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardData } from '../app/models/dashboard-admin';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = `${environment.apiUrl}/Dashboard`; // API endpoint

  constructor(private http: HttpClient) {}

  getDashboardMetrics(): Observable<DashboardData> {
    return this.http.get<DashboardData>(this.apiUrl);
  }

   // Takvim eventleri için metot
  getCalendarEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/calendar-events`);
  }
}
