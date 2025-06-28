import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {ProjectService} from '../../services/project.service';
import { Project } from '../../app/models/project.model';
import { ProjectHttpService } from '../../services/project-http.service';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects : Project[] = [];

    constructor(private projectHttpService: ProjectHttpService/*private projectService:ProjectService*/) { }

  ngOnInit(): void {
    // this.projects = this.projectService.getProjects();
    this.projectHttpService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error : (error) => {
        console.error('Proje verileri alınırken hata oluştu:', error);
      }
    })

  }
}
