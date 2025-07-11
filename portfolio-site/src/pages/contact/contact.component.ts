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
 email = '';
 message ='';

 sendMessage() {
    if (!this.userName || !this.email || !this.message) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }
    // Burada backend API çağrısı yapabilirsin (şimdilik konsola yazdırıyoruz)
    console.log('İsim:', this.userName);
    console.log('Email:', this.email);
    console.log('Mesaj:', this.message);

     alert('Mesajınız gönderildi! Teşekkürler.');
    this.userName = '';
    this.email = '';
    this.message = '';
}}
