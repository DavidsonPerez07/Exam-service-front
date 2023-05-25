import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/entities/Exam';
import { ExamServiceService } from 'src/app/services/exam-service.service';

@Component({
  selector: 'evalserv-get-exam-details',
  templateUrl: './get-exam-details.component.html',
  styleUrls: ['./get-exam-details.component.css']
})
export class GetExamDetailsComponent implements OnInit{

  idExam: number;
  exam: Exam;

  constructor(private route: ActivatedRoute, private examService: ExamServiceService) {

  }

  ngOnInit(): void {
    this.idExam = this.route.snapshot.params['idExam'];
    this.exam = new Exam();
    this.examService.getOneExam(this.idExam).subscribe(data => {
      this.exam = data;
    })
  }


}
