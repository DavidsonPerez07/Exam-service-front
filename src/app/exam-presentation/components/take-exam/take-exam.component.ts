import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/entities/Answer';
import { Exam } from 'src/app/entities/Exam';
import { ExamPresentation } from 'src/app/entities/ExamPresentation';
import { Student } from 'src/app/entities/Student';
import { ExamPresentationServiceService } from 'src/app/services/exam-presentation-service.service';
import { ExamServiceService } from 'src/app/services/exam-service.service';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'evalserv-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.css']
})
export class TakeExamComponent implements OnInit{

  examPresentation: ExamPresentation = new ExamPresentation();
  answer: Answer = new Answer();
  answers: Answer[];
  optionId: number;
  optionIds: number[];
  idExam: number;
  exam: Exam = new Exam();
  student: Student = new Student();
  existStudent: boolean;
  idStudent: any;

  constructor(private examPresentationService: ExamPresentationServiceService, private router: Router,
    private examServcice: ExamServiceService, private studentService: StudentServiceService,
    private route: ActivatedRoute) {
    this.answers = [];
    this.optionIds = [];
  }

  showExam() {
    this.examServcice.getOneExam(this.idExam).subscribe(data => {
      this.exam = data;
    });
  }

  getStudent(idStudent: number): Student {
    this.studentService.getOneStudent(idStudent).subscribe(data => {
      this.student = data;
    });

    return this.student;
  }

  studentExist(idStudent: number) {
    if (this.getStudent(idStudent) !== null) {
      this.existStudent = true;
    }
    else {
      this.existStudent = false;
    }
  }

  saveExamPresentation() {
    this.examPresentation.studentId = this.student.idStudent;
    this.examPresentation.answers = this.answers;
    this.examPresentation.examId = this.exam.idExam;
    this.examPresentationService.saveExamPresentation(this.examPresentation).subscribe(data => {
      console.log(data);
      this.sendToReview();
    }, error => console.log(error));
  }

  saveAnswers() {
    this.answer.optionIds = this.optionIds;
    this.answers.push(this.answer);
  }

  saveOptionIds() {
    this.optionIds.push(this.optionId);
  }

  onSubmit() {
    this.getStudent(this.idStudent);
    this.saveOptionIds();
    this.saveAnswers();
    console.log(this.examPresentation);
    this.showExamPresentation(this.examPresentation.idExamPresentation);
  }

  sendToReview() {
    this.router.navigate(['/exam-presentation/show-exam-presentation/:idExam/:idStudent']);
  }

  ngOnInit(): void {
    this.idExam = this.route.snapshot.params['idExam'];
  }

  showExamPresentation(idExamPresentation: number) {
    this.router.navigate(['/exam-presentation/show-exam-presentation', idExamPresentation]);
  }
}
