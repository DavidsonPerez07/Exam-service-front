import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/entities/Answer';
import { Exam } from 'src/app/entities/Exam';
import { ExamPresentation } from 'src/app/entities/ExamPresentation';
import { Student } from 'src/app/entities/Student';
import { ExamPresentationServiceService } from 'src/app/services/exam-presentation-service.service';
import { ExamServiceService } from 'src/app/services/exam-service.service';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'evalserv-show-exam-presentation',
  templateUrl: './show-exam-presentation.component.html',
  styleUrls: ['./show-exam-presentation.component.css']
})

export class ShowExamPresentationComponent implements OnInit {
  idExamPresentation: number;
  examPresentation: ExamPresentation;
  exam: Exam = new Exam();
  student: Student = new Student();
  validez: string;
  answer: Answer = new Answer();

  constructor(private route:ActivatedRoute, private examPresentationService: ExamPresentationServiceService,
    private examService: ExamServiceService, private studentService: StudentServiceService) {

  }



  getExam() {
    this.examService.getOneExam(this.examPresentation.examId).subscribe(data => {
      this.exam = data;
    });
  }

  getStudent() {
    this.studentService.getOneStudent(this.examPresentation.studentId).subscribe(data => {
      this.student = data;
    });
  }

  ngOnInit(): void {
    this.idExamPresentation = this.route.snapshot.params['idExamPresentation'];
    this.examPresentation = new ExamPresentation();
    this.examPresentationService.getOneExamPresentation(this.idExamPresentation).subscribe(data => {
      this.examPresentation = data;
    });
  }
}
