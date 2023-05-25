import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/entities/Exam';
import { ExamServiceService } from 'src/app/services/exam-service.service';

@Component({
  selector: 'evalserv-get-exam',
  templateUrl: './get-exam.component.html',
  styleUrls: ['./get-exam.component.css']
})
export class GetExamComponent {

  exams: Exam[];

  constructor(private examService: ExamServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.getExams();
  }

  private getExams() {
    this.examService.getExamsList().subscribe(list => {
      this.exams = list;
    });
  }

  editExam(idExam: number) {
    this.router.navigate(['/exam-management/edit-exam', idExam]);
  }

  deleteExam(idExam: number) {
    this.examService.deleteExam(idExam).subscribe(data => {
      this.getExams();
    })
  }

  getExamDetails(idExam: number) {
    this.router.navigate(['/exam-management/exam-details', idExam])
  }
}
