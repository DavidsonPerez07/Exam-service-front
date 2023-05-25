import { Injectable } from '@angular/core';
import { Student } from '../entities/Student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private getAllURL = "http://localhost:8080/student/getAllStudents";
  private postURL = "http://localhost:8080/student/saveStudent"
  private putURL = "http://localhost:8080/student/editStudent"
  private getURL = "http://localhost:8080/student/getStudent";
  private deleteURL = "http://localhost:8080/student/deleteStudent";

  constructor(private httpClient: HttpClient) { }

  getStudentsList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.getAllURL}`);
  }

  saveStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.postURL}`, student);
  }

  editStudent(idStudent: number, student: Student): Observable<Object> {
    return this.httpClient.put(`${this.putURL}?idStudent=${idStudent}`, student);
  }

  getOneStudent(idStudent: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.getURL}?idStudent=${idStudent}`)
  }

  deleteStudent(idStudent: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}?idStudent=${idStudent}`)
  }
}
