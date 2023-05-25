import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStudentsComponent } from './components/get-students/get-students.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

const routes: Routes = [
  {
    path: 'get-students',
    component: GetStudentsComponent
  },
  {
    path: 'register-student',
    component: RegisterStudentComponent
  },
  {
    path: 'edit-student/:idStudent',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentManagementRoutingModule { }
