import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/entities/Exam';
import { Option } from 'src/app/entities/Option';
import { Question } from 'src/app/entities/Question';
import { ExamServiceService } from 'src/app/services/exam-service.service';

@Component({
  selector: 'evalserv-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent {

  exam: Exam = new Exam();
  question: Question = new Question();
  option: Option = new Option();
  options: Option[];
  questions: Question[];

  constructor(private examService: ExamServiceService, private router: Router) {

  }

  saveExam() {
    this.exam.questions = this.questions;
    this.examService.saveExam(this.exam).subscribe(data => {
      console.log(data);
      this.sendToList()
    }, error => console.log(error));
  }

  saveOptions() {
    this.options.push(this.option);
    console.log('opcion añadida');
  }

  saveQuestions() {
    this.question.options = this.options;
    this.questions.push(this.question);
    console.log('pregunta añadida');  
  }

  sendToList() {
    this.router.navigate(['/exam-management/get-exams']);
  }

  onSubmit() {
    console.log(this.exam);
    this.saveExam();
  }
}
