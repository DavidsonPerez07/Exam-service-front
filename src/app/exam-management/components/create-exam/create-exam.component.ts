  import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
export class CreateExamComponent implements OnInit{

  exam: Exam = new Exam();
  question: Question = new Question();
  option: Option = new Option();
  options: Option[];
  questions: Question[];
  aviso: boolean;
  avisoP: boolean
  avisoTimeout: any;
  avisoPTimeout: any;

  constructor(private examService: ExamServiceService, private router: Router) {
    this.options = [];
    this.questions = [];
  }

  ngOnInit(): void {

  }

  saveExam() {
    this.exam.questions = this.questions;
    this.examService.saveExam(this.exam).subscribe(data => {
      console.log(data);
      this.sendToList();
    }, error => console.log(error));
  }

  saveOptions(form: NgForm) {
    this.options.push(this.option);
    console.log('Opcion añadida');
    console.log(this.option.description);
    this.cleanOption(form);
    this.option = new Option();
    console.log(this.option);
    console.log('El array opciones: ' + this.options);
    this.mostrarAviso();
  }

  saveQuestions(form: NgForm) {
    this.question.options = this.options;
    this.questions.push(this.question);
    console.log('Pregunta añadida');
    console.log(this.question.description);
    this.cleanQuestion(form);
    this.question = new Question();
    console.log(this.question.description);
    console.log('El array preguntas: ' + this.questions);
    this.mostrarAvisoP();
  }

  mostrarAviso() {
    this.aviso = true;
    this.avisoTimeout = setTimeout(() => {
      this.aviso = false;
    }, 1000);
  }

  mostrarAvisoP() {
    this.avisoP = true;
    this.avisoPTimeout.setTimeout(() => {
      this.avisoP = false;
    }, 1000);
  }

  sendToList() {
    this.router.navigate(['/exam-management/get-exams']);
  }

  onSubmit() {
    this.saveExam();
    console.log(this.exam);
  }

  ngOnDestroy() {
    if (this.avisoTimeout) {
      clearTimeout(this.avisoTimeout);
    }
  }

  cleanOption(form: NgForm) {
    form.reset();
  }

  cleanQuestion(form: NgForm) {
    form.reset();
  }
}
