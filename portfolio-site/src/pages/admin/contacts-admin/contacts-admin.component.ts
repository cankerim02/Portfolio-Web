import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactMessageAdmin } from '../../../app/models/contactmessage.admin';
import { ContactAdminService } from '../../../services/contact-admin.service';
import { ToastrService } from 'ngx-toastr';



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

  constructor(private contactAdminService: ContactAdminService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadingMessages();
    // TODO: API'den contact messages listesi
  }

  loadingMessages()
  {
    this.loading = true;
    this.contactAdminService.getAll().subscribe({
      next : res => this.messages = res,
      error: err => this.toastrService.error(
        err?.error?.errmessage || 'Mesajlar yüklenemedi. Lütfen tekrar deneyin.','Hata'
    ),
      complete: () => this.loading = false
    });
  }


  viewDetail(msg: ContactMessageAdmin) {
    this.selected = msg;
    this.replyText = msg.adminReply ?? '';
  }

  sendReply() {
    if (!this.selected) return;

    const id = this.selected.id;
    this.contactAdminService.reply(id, { reply: this.replyText }).subscribe({
    // TODO: API -> /api/admin/messages/{id}/reply POST { reply: replyText }

      next: () => {
        // UI güncelle
        this.selected!.adminReply = this.replyText;
        this.selected!.isReplied = true;
        this.selected!.repliedAt = new Date().toISOString();
        this.replyText = '';
        this.toastrService.success('Yanıt başarıyla gönderildi', 'Başarılı');
      },
      error: () => {
        this.toastrService.error('Yanıt gönderilemedi. Lütfen tekrar deneyin.', 'Hata');
      }
    });
  }

  closeDetail() {
    this.selected = undefined;
    this.replyText = '';
  }
}
