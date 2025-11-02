import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectAdmin } from '../app/models/project-admin';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectAdminService {
  private apiUrl = `${environment.apiUrl}/Project`; // Backend API URL

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProjectAdmin[]> {
    return this.http.get<ProjectAdmin[]>(this.apiUrl);
  }

  create(project: ProjectAdmin): Observable<any> {
    return this.http.post(this.apiUrl, project);
  }

  update(project: ProjectAdmin): Observable<any> {
    return this.http.put(this.apiUrl, project);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
