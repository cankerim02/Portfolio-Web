import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { title } from 'process';

interface Project {
  id: number;
  title: string;
  description: string;
  url?: string;
  active: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects : Project[] = [
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
  ]
}
