import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STUDENT_URL } from '../app.constant';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  public getAllStudents(): Observable<any> {
    return this.httpClient.get(`${STUDENT_URL}`);
  }

  public addStudents(student: Student): Observable<any> {
    student.id = 0;
    return this.httpClient.post(`${STUDENT_URL}`, student);
  }

  public updateStudents(student: Student): Observable<any> {
    return this.httpClient.put(`${STUDENT_URL}`, student);
  }

  public deleteStudents(id: number): Observable<any> {
    return this.httpClient.delete(`${STUDENT_URL}/${id}`);
  }
}
