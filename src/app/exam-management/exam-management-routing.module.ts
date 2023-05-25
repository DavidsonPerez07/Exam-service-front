import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { GetExamComponent } from './components/get-exam/get-exam.component';
import { GetExamDetailsComponent } from './components/get-exam-details/get-exam-details.component';


const routes: Routes = [
  {
    path: 'create-exam',
    component: CreateExamComponent
  },
  {
    path: 'get-exams',
    component: GetExamComponent
  },
  {
    path: 'exam-details/:idExam',
    component: GetExamDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamManagementRoutingModule { }
