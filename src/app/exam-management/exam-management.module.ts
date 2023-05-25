import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamManagementRoutingModule } from './exam-management-routing.module';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetExamComponent } from './components/get-exam/get-exam.component';
import { GetExamDetailsComponent } from './components/get-exam-details/get-exam-details.component';


@NgModule({
  declarations: [
    CreateExamComponent,
    GetExamComponent,
    GetExamDetailsComponent
  ],
  imports: [
    CommonModule,
    ExamManagementRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ExamManagementModule { }
