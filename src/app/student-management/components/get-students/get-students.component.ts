import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/entities/Student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'evalserv-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.css']
})
export class GetStudentsComponent implements OnInit{

  students: Student[];

  constructor(private studentService: StudentServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getStudentsList().subscribe(list => {
      this.students = list;
    });
  }

  editStudent(idStudent: number) {
    this.router.navigate(['/student-management/edit-student', idStudent]);
  }

  deleteStudent(idStudent: number) {
    this.studentService.deleteStudent(idStudent).subscribe(data => {
      this.getStudents();
    })
  }
}
