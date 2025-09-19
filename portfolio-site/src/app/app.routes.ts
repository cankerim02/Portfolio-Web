import { Routes } from '@angular/router';

// Admin components
import { AdminLayoutComponent } from '../pages/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';

import { ContactsAdminComponent } from '../pages/admin/contacts-admin/contacts-admin.component';
import { ProjectsAdminComponent } from '../pages/admin/project-admin/project-admin.component';
import { LoginAdminComponent } from '../pages/admin/login-admin/login-admin.component';
import { HomeLayoutComponent } from '../pages/home-layout/home-layout.component';
import { AuthGuard } from './guards/authguard';



export const routes: Routes = [

  // Login sayfası
  {path: 'login', component: LoginAdminComponent},

// PUBLIC

    { path: '', component: HomeLayoutComponent },

  // Admin routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard], // burada guard ekledik
    children: [
      { path: '', component: DashboardComponent },
      { path: 'projects', component: ProjectsAdminComponent },
      { path: 'contacts', component: ContactsAdminComponent }
    ]
  },

];
