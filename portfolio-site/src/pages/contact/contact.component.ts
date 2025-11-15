import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactMessage } from '../../app/models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

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

 constructor(private contactService:ContactService,
  private toastrService:ToastrService
 )  {}

   sendMessage() {
    if  (!this.userName?.trim() || !this.email?.trim() || !this.message?.trim())
      {
        this.toastrService.warning('Lütfen tüm alanları doldurun!','Uyarı');
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
        this.toastrService.success('Mesajınız başarıyla gönderildi!', 'Başarılı');
        this.userName = '';
        this.email = '';
        this.message = '';
      },
      error: () => {
        this.toastrService.error('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.', 'Hata');
      }
    });
  }}

