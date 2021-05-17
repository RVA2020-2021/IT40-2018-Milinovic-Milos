import { PROJEKAT_URL } from 'src/app/app.constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projekat } from '../models/projekat';

@Injectable({
  providedIn: 'root'
})
export class ProjekatService {

  constructor(private httpClient: HttpClient) { }

  public getAllProjects(): Observable<any> {
    return this.httpClient.get(`${PROJEKAT_URL}`);
  }

  public addProjects(projekat: Projekat): Observable<any> {
    projekat.id = 0;
    return this.httpClient.post(`${PROJEKAT_URL}`, projekat);
  }

  public updateProjects(projekat: Projekat): Observable<any> {
    return this.httpClient.put(`${PROJEKAT_URL}`, projekat);
  }

  public deleteProjects(id: number): Observable<any> {
    return this.httpClient.delete(`${PROJEKAT_URL}/${id}`);
  }
}
