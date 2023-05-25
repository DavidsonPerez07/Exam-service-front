import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../entities/Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  private getAllURL = "http://localhost:8080/exam/getAllExams";
  private postURL = "http://localhost:8080/exam/saveExam"
  private getURL = "http://localhost:8080/exam/getExam";
  private deleteURL = "http://localhost:8080/exam/deleteExam";

  constructor(private httpClient: HttpClient) { }

  getExamsList(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(`${this.getAllURL}`);
  }

  saveExam(exam: Exam): Observable<Object> {
    return this.httpClient.post(`${this.postURL}`, exam);
  }

  getOneExam(idExam: number): Observable<Exam> {
    return this.httpClient.get<Exam>(`${this.getURL}?idExam=${idExam}`)
  }

  deleteExam(idExam: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}?idExam=${idExam}`)
  }
}
