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
export class ProjectsComponent  {
 showAll = false;
 projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Angular and Tailwind CSS.',
      image: '',
      link: '#',

    },
    {
      title: 'E-Commerce App',
      description: 'A modern e-commerce platform with Angular frontend.',
      image: '',
      link: '#'
    },
    {
      title: 'Blog Platform',
      description: 'A blog site built using Angular and Node.js.',
      image: '',
      link: '#'
    },
     {
      title: 'Blog Platform',
      description: 'A blog site built using Angular and Node.js.',
      image: '',
      link: '#'
    },
     {
      title: 'Blog Platform',
      description: 'A blog site built using Angular and Node.js.',
      image: '',
      link: '#'
    },
     {
      title: 'Blog Platform',
      description: 'A blog site built using Angular and Node.js.',
      image: '',
      link: '#'
    }
  ];
   get displayedProjects(): Project[] {
    return this.showAll ? this.projects : this.projects.slice(0, 3);
  }
   toggleShowAll() {
    this.showAll = !this.showAll;
  }

}
