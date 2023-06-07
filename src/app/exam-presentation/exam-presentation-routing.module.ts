import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeExamComponent } from './components/take-exam/take-exam.component';
import { ShowExamPresentationComponent } from './components/show-exam-presentation/show-exam-presentation.component';

const routes: Routes = [
  {
    path: 'take-exam/:idExam',
    component: TakeExamComponent
  },
  {
    path: 'show-exam-presentation/:idExamPresentation',
    component: ShowExamPresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamPresentationRoutingModule { }
