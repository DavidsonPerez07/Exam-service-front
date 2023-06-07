import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamPresentationRoutingModule } from './exam-presentation-routing.module';
import { TakeExamComponent } from './components/take-exam/take-exam.component';
import { ShowExamPresentationComponent } from './components/show-exam-presentation/show-exam-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TakeExamComponent,
    ShowExamPresentationComponent
  ],
  imports: [
    CommonModule,
    ExamPresentationRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
  ]
})
export class ExamPresentationModule { }
