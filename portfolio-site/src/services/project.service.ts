import { Injectable } from '@angular/core';
import { Project } from '../app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

 private projects : Project[] = [
     {
      id: 1,
      title: 'Kişisel Web Sitesi',
      description: 'Angular ve Tailwind ile geliştirdiğim kişisel portföy sitem.',
      url: 'https://cankerim02.github.io/portfolio-web/',
      active: true,
    },
    {
      id: 2,
      title: 'Todo List Uygulaması',
      description: 'Angular Reactive Forms ve LocalStorage kullandığım proje.',
      active: true,
    },
     {
      id: 3,
      title: 'Bitmemiş Proje',
      description: 'Henüz tamamlanmamış bir deneme projesi.',
      active: false,
    }
  ];

  getProjects() : Project[] {
    return this.projects;
  }
}
