import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/entities/Student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'evalserv-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent {

  student: Student = new Student();

  constructor(private studentService: StudentServiceService, private router: Router) {

  }

  saveStudent() {
    this.studentService.saveStudent(this.student).subscribe(data => {
      console.log(data);
      this.sendToList()
    }, error => console.log(error));
  }

  sendToList() {
    this.router.navigate(['/student-management/get-students']);
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }
}
