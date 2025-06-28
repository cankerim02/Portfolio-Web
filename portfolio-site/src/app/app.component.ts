import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../pages/footer/footer.component';
import { HeaderComponent } from '../pages/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projects = [
    { title: 'Proje 1', description: 'Açıklama 1' },
    { title: 'Proje 2', description: 'Açıklama 2' },
    { title: 'Proje 3', description: 'Açıklama 3' },
    { title: 'Proje 4', description: 'Açıklama 4' }
  ];
}
