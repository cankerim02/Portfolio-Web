import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectAdmin } from '../../../app/models/project-admin';
import { ProjectAdminService } from '../../../services/project-admin.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-projects-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-admin.component.html',
})
export class ProjectsAdminComponent {
  projects: ProjectAdmin[] = []; // API bağlanınca dolduracağız
  showForm = false;
  editMode = false;
  formModel: ProjectAdmin = this.emptyProject();

  constructor(private projectAdminService: ProjectAdminService, private toastr:ToastrService) {}

  ngOnInit(): void {
    // TODO: API'den projeleri çek (getAll)
    this.loadProjects();
    console.log('ProjectsAdmin init -> API’den projeler çekilecek');
  }

  loadProjects(){
    this.projectAdminService.getAll().subscribe({
      next: (res) => this.projects = res,
      error: (err) => {
      console.error('Error loading projects:', err);
       this.toastr.error('Projeler yüklenirken bir hata oluştu.', 'Hata');
      },
  });

}


  openCreate() {
    this.showForm = true;
    this.editMode = false;
    this.formModel = this.emptyProject();
  }

  openEdit(project: ProjectAdmin) {
    this.showForm = true;
    this.editMode = true;
    this.formModel = { ...project };
  }

  save() {
       // TODO: API çağrısı -> update
    if (this.editMode) {
        console.log('UPDATE ->', this.formModel);
        this.projectAdminService.update(this.formModel).subscribe({
          next : () => {
             this.toastr.success('Proje başarıyla güncellendi.', 'Başarılı');
            this.loadProjects(); // Güncelleme sonrası projeleri yeniden yükle
          },
           error: () => this.toastr.error('Proje güncellenirken bir hata oluştu.', 'Hata'),
        });
     }

        // TODO: API çağrısı -> create
     else {
        console.log('CREATE ->', this.formModel);
        this.projectAdminService.create(this.formModel).subscribe(
          {
            next : () => {
               this.toastr.success('Proje başarıyla oluşturuldu.', 'Başarılı');
              this.loadProjects(); // Yeni proje eklendikten sonra projeleri yeniden yükle
            },
             error: () => this.toastr.error('Proje oluşturulurken bir hata oluştu.', 'Hata'),
          }); // Yeni proje ekledikten sonra projeleri yeniden yükle
      }
    this.closeForm();
  }
// TODO: API çağrısı -> delete
  delete(project: ProjectAdmin) {
    if (!project.id) return;
    console.log('DELETE ->', project.id);
    this.projectAdminService.delete(project.id).subscribe({
      next :() => {
        this.toastr.success('Proje başarıyla silindi.', 'Başarılı');
        this.loadProjects();
      },
      error: () => this.toastr.error('Proje silinirken bir hata oluştu.', 'Hata'),

  }); // Silme sonrası projeleri yeniden yükle
}

  closeForm() {
    this.showForm = false;
    this.formModel = this.emptyProject();
  }

  private emptyProject(): ProjectAdmin {
    return {
      title: '',
      description: '',
      imageUrl: '',
      projectUrl: '',
      startDate: undefined,
      endDate: undefined,
    };
  }
}
