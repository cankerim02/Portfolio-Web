import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../app/models/contact.model';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:44321/api/Contact/send'; // Backend URL

  constructor(private http: HttpClient) {}

  sendMessage(contact: ContactMessage): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }
}
