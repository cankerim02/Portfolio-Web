import { Injectable } from '@angular/core';
import { Project } from '../app/models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

 private apiUrl = `${environment.apiUrl}/Project`;


 constructor(private http:HttpClient) { }

 getAllProject():Observable<Project[]> {
   return this.http.get<Project[]>(`${this.apiUrl}`);
 }
}
