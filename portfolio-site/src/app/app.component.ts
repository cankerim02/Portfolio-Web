import { Component } from '@angular/core';
import { FooterComponent } from '../pages/footer/footer.component';
import { HeaderComponent } from '../pages/header/header.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../pages/hero/hero.component';
import { AboutComponent } from "../pages/about/about.component";
import { ProjectsComponent } from "../pages/projects/projects.component";
import { ContactComponent } from "../pages/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDarkMode= false;

toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;

  if (this.isDarkMode) {
    document.documentElement.classList.add('dark');  // <html> elementine ekle
  } else {
    document.documentElement.classList.remove('dark');
  }
}

}
