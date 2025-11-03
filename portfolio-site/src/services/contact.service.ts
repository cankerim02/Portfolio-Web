import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../app/models/contact.model';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/Contact`; // Backend URL

  constructor(private http: HttpClient) {}

  sendMessage(contact: ContactMessage): Observable<any> {
    return this.http.post(`${this.apiUrl}/send`, contact);
  }
}
