import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactMessage } from '../../../app/models/contact.model';
import { ContactMessageAdmin } from '../../../app/models/contactmessage-admin';
import { ContactAdminService } from '../../../services/contact-admin-service';



@Component({
  selector: 'app-contacts-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts-admin.component.html'
})
export class ContactsAdminComponent {
  messages: ContactMessageAdmin[] = []; // API bağlanınca dolduracağız
  selected?: ContactMessageAdmin;
  replyText = '';
  loading = false;

  constructor(private contactAdminService: ContactAdminService) {}

  ngOnInit(): void {
    this.loadingMessages();
    console.log('ContactsAdmin init -> API’den mesajlar çekilecek');
    // TODO: API'den contact messages listesi
  }

  loadingMessages()
  {
    this.loading = true;
    this.contactAdminService.getAll().subscribe({
      next : res => this.messages = res,
      error: err => console.error('Error loading messages:', err),
      complete: () => this.loading = false
    });
  }


  viewDetail(msg: ContactMessageAdmin) {
    this.selected = msg;
    this.replyText = msg.adminReply ?? '';
  }

  sendReply() {
    if (!this.selected) return;
    console.log('REPLY ->', this.selected.id, this.replyText);
    const id = this.selected.id;
    this.contactAdminService.reply(id, { reply: this.replyText }).subscribe({
    // TODO: API -> /api/admin/messages/{id}/reply POST { reply: replyText }

      next: () => {
        // UI güncelle
        this.selected!.adminReply = this.replyText;
        this.selected!.isReplied = true;
        this.selected!.repliedAt = new Date().toISOString();
        this.replyText = '';
        alert("Reply sent successfully!");
      },
      error: (err) => {
        console.error('Error sending reply:', err);
        alert("Failed to send reply. Please try again.");
      }
    });
  }

  closeDetail() {
    this.selected = undefined;
    this.replyText = '';
  }
}
