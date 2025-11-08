import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

menuOpen = false;
screenWidth = window.innerWidth;
  constructor(public authService: AuthService) {}

  ngOnInit() {
      window.addEventListener('resize', () => {
    this.screenWidth = window.innerWidth;
  });
  }

}
