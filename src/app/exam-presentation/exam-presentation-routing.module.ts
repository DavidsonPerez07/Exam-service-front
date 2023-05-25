import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationHomeComponent } from './components/presentation-home/presentation-home.component';
import { TakeExamComponent } from './components/take-exam/take-exam.component';
import { ShowExamPresentationComponent } from './components/show-exam-presentation/show-exam-presentation.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationHomeComponent
  },
  {
    path: 'take-exam/idStudent/idExam',
    component: TakeExamComponent
  },
  {
    path: 'show-exam-presentation',
    component: ShowExamPresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamPresentationRoutingModule { }
