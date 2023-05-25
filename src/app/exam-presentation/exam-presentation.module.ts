import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamPresentationRoutingModule } from './exam-presentation-routing.module';
import { TakeExamComponent } from './components/take-exam/take-exam.component';
import { ShowExamPresentationComponent } from './components/show-exam-presentation/show-exam-presentation.component';
import { PresentationHomeComponent } from './components/presentation-home/presentation-home.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TakeExamComponent,
    ShowExamPresentationComponent,
    PresentationHomeComponent
  ],
  imports: [
    CommonModule,
    ExamPresentationRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ExamPresentationModule { }
