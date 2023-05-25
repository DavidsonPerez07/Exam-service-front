import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'student-management',
    loadChildren: () => import('./student-management/student-management.module').then(m => m.StudentManagementModule)
  },
  {
    path: 'exam-management',
    loadChildren: () => import('./exam-management/exam-management.module').then(m => m.ExamManagementModule)
  },
  {
    path: 'exam-presentation',
    loadChildren: () => import('./exam-presentation/exam-presentation.module').then(m => m.ExamPresentationModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
