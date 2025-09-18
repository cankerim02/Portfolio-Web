import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // const token = localStorage.getItem('token');
    let token: string | null = null;

    if(typeof localStorage !== 'undefined'){
      token = localStorage.getItem('token');
    }

    if (token) {
      // İstersen token içindeki role’ü decode edip kontrol edebilirsin
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
