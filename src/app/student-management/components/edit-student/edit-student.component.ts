import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/entities/Student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'evalserv-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{

  idStudent: number;
  student: Student = new Student();

  constructor(private studentService: StudentServiceService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.idStudent = this.route.snapshot.params['idStudent'];
    this.studentService.getOneStudent(this.idStudent).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }

  goToStudentList() {
    this.router.navigate(['/student-management/get-students']);
  }

  onSubmit() {
    this.studentService.editStudent(this.idStudent, this.student).subscribe(data => {
      this.goToStudentList();
    }, error => console.log(error));
  }
}
