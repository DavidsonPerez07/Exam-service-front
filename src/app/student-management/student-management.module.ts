import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagementRoutingModule } from './student-management-routing.module';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { GetStudentsComponent } from './components/get-students/get-students.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


@NgModule({
  declarations: [
    RegisterStudentComponent,
    GetStudentsComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    StudentManagementRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ]
})
export class StudentManagementModule { }
