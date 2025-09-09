import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {

  email = '';
  password = '';
  errorMessage = '';


  constructor(private authService: AuthService , private router: Router) { }

  login() {
    this.authService.login( {email: this.email, password: this.password} )
    .subscribe(
      {
        next : (response) => {
          this.authService.saveToken(response.token);
          this.router.navigate(['/admin']); //giriş sonrası admin sayfasına yönlendir
        },
        error: () => {
          this.errorMessage = 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.';
        }
      });
  }
}

