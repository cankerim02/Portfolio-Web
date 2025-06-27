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
 skills = ['Angular', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'];
}
