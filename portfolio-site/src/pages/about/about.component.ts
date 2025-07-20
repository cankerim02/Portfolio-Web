import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../about/about.component.html',
  styleUrls: ['../about/about.component.css']
})
export class AboutComponent {
 name = 'Kerim Can'
 job = 'Software Engineer';
 // bu skilleri github profilimden alabilirim
 skills = [
  { name: 'Angular', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'C#', level: 85 },
  { name: 'SQL', level: 70 },
  { name: 'Tailwind CSS', level: 65 }
];

}
