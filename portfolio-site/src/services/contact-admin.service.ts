import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReplyDto } from '../app/models/replydto';
import { ContactMessageAdmin } from '../app/models/contactmessage.admin';
import { environment } from '../environments/environment';




@Injectable({ providedIn: 'root' })
export class ContactAdminService {
  private apiUrl = `${environment.apiUrl}/Admin` // Backend'ine göre ayarla

  constructor(private http: HttpClient) {}

  getAll(): Observable<ContactMessageAdmin[]> {
    return this.http.get<ContactMessageAdmin[]>(this.apiUrl);
  }

  getById(id: number): Observable<ContactMessageAdmin> {
    return this.http.get<ContactMessageAdmin>(`${this.apiUrl}/${id}`);
  }

  reply(id: number, dto: ReplyDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/reply`, dto);
  }

  // (İstersen) silme de ekleyebilirsin
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
