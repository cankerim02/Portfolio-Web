import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectService} from '../../services/project.service';
import { Project } from '../../app/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 showAll = false;
 projects: Project[] = [];


 constructor(private projectService: ProjectService) { }

 ngOnInit(): void {
   this.projectService.getAllProject().subscribe({
    next : (data) => {
      this.projects = data.map(p => ({
      ...p,
      imageUrl: p.imageUrl,
      projectUrl: p.projectUrl
    }));
    },

    error: (err) => console.error('Projeler yüklenirken hata:', err)
 });
}
   get displayedProjects(): Project[] {
    return this.showAll ? this.projects : this.projects.slice(0, 3);
  }
   toggleShowAll() {
    this.showAll = !this.showAll;
  }

}
