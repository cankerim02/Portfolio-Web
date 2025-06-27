import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 userName = '';
 message ='';

 sendMessage() {
    console.log('İsim:', this.userName);
    console.log('Mesaj:', this.message);
    alert('Mesaj gönderildi!');
  }
}
