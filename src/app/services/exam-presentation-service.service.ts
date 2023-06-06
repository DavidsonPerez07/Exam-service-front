import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamPresentation } from '../entities/ExamPresentation';

@Injectable({
  providedIn: 'root'
})
export class ExamPresentationServiceService {

  private getAllURL = "http://localhost:8080/exampresentation/getAllPresentations";
  private postURL = "http://localhost:8080/exampresentation/takeExam"
  private getURL = "http://localhost:8080/exampresentation/getExamPresentation";
  private deleteURL = "http://localhost:8080/exampresentation/deleteExamPresentation";

  constructor(private httpClient: HttpClient) { }

  getExamPresentationList(): Observable<ExamPresentation[]> {
    return this.httpClient.get<ExamPresentation[]>(`${this.getAllURL}`);
  }

  saveExamPresentation(examPresentation: ExamPresentation): Observable<Object> {
    return this.httpClient.post(`${this.postURL}`, examPresentation);
  }

  getOneExamPresentation(idExamPresentation: number): Observable<ExamPresentation> {
    return this.httpClient.get<ExamPresentation>(`${this.getURL}?idExamPresentation=${idExamPresentation}`);
  }

  deleteExam(idExamPresentation: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}?idExamPresentation=${idExamPresentation}`);
  }
}
