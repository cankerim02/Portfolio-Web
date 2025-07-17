import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 @Input() isDarkMode = false;
 @Output() toggleDarkMode = new EventEmitter<void>();
 onToggle() {
    this.toggleDarkMode.emit();
  }
}
