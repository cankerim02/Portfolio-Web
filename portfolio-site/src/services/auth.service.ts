import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../app/models/login.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'https://localhost:44321/api/Auth/login'

  constructor(private http:HttpClient, private router:Router) { }

  login(loginData : LoginModel):Observable<any>
   {
    return this.http.post(this.apiUrl, loginData);
   }

   saveToken(token:string)
   {
    localStorage.setItem('token',token);
   }

   getToken(): string | null {
    return localStorage.getItem('token');
   }

   isAuthenticated(): boolean {
    return !!this.getToken();
   }

   logout()
   {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
   }
}
