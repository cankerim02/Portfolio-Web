import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactMessage } from '../../app/models/contact.model';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 userName = '';
 email = '';
 message ='';

 constructor(private contactService:ContactService)  {}

   sendMessage() {
    if  (!this.userName?.trim() || !this.email?.trim() || !this.message?.trim())
      {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    const contactData:ContactMessage =
    {
      name : this.userName,
      email : this.email,
      message : this.message
    }

     this.contactService.sendMessage(contactData).subscribe({
      next: () => {
        alert('Mesajınız başarıyla gönderildi!');
        this.userName = '';
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        console.error('Mesaj gönderilirken hata oluştu:', err);
        alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    });
}}

