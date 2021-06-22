import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMIJER_URL } from '../app.constant';
import { Smijer } from '../models/smijer';

@Injectable({
  providedIn: 'root'
})
export class SmijerService {

  constructor(private httpClient: HttpClient) { }

  public getAllSmijer(): Observable<any> {
    return this.httpClient.get(`${SMIJER_URL}`);
  }

  public addSmijer(smijer: Smijer): Observable<any> {
    smijer.id = 0;
    return this.httpClient.post(`${SMIJER_URL}`, smijer);
  }

  public updateSmijer(smijer: Smijer): Observable<any> {
    return this.httpClient.put(`${SMIJER_URL}`, smijer);
  }

  public deleteSmijer(id: number): Observable<any> {
    return this.httpClient.delete(`${SMIJER_URL}/${id}`);
  }
}
