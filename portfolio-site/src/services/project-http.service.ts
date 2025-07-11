import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectHttpService {

  private apiUrl = 'assets/projects.json';

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
