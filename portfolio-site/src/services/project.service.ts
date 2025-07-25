import { Injectable } from '@angular/core';
import { Project } from '../app/models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

 private apiUrl = 'https://localhost:44321/api/Project';


 constructor(private http:HttpClient) { }

 getAllProject():Observable<Project[]> {
   return this.http.get<Project[]>(this.apiUrl);
 }

}
