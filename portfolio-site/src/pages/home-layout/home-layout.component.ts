import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { NavigationEnd, Router, RouterOutlet, Event, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
     CommonModule,
        HeaderComponent,
        FooterComponent,
        HeroComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        RouterOutlet,
        RouterLink,
        FormsModule
  ],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
 isDarkMode= false;
  isAdminRoute = false;
  isLoginRoute = false;

  constructor(private router: Router) {
   this.router.events
  .pipe(
    filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
  )
  .subscribe((event: NavigationEnd) => {
    this.isAdminRoute = event.urlAfterRedirects.startsWith('/admin');
    this.isLoginRoute = event.urlAfterRedirects === '/login';
  });
  }
toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;

  if (this.isDarkMode) {
    document.documentElement.classList.add('dark');  // <html> elementine ekle
  } else {
    document.documentElement.classList.remove('dark');
  }
}
}
