import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Admin components
import { AdminLayoutComponent } from '../pages/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';

import { ProjectsAdminComponent } from '../pages/admin/projects-admin/projects-admin.component';
import { ContactsAdminComponent } from '../pages/admin/contacts-admin/contacts-admin.component';

export const routes: Routes = [

  // Public routes
  { path: '', component: AppComponent },

  // Admin routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'projects', component: ProjectsAdminComponent },
      { path: 'contacts', component: ContactsAdminComponent }
    ]
  },

];
