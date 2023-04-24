import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Job } from 'src/app/models/job.model';

import { environment } from 'src/environments/environment';
import { SessionsService } from 'src/app/services/auth/sessions.service';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient, private sessions: SessionsService) {}

  url: string = environment.apiEndpoint + 'jobs';

  public findAll(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url + '?limit=15', this.options);
  }

  public findById(id: number): Observable<Job> {
    return this.http.get<Job>(this.url + '/' + id, this.options);
  }

  public insert(job: Job): Observable<Job> {
    return this.http.post<Job>(this.url, job, this.options);
  }

  public update(job: Job): Observable<Job> {
    return this.http.put<Job>(this.url + '/' + job.id, job, this.options);
  }

  public delete(job: Job): Observable<Job> {
    return this.http.delete<Job>(this.url + '/' + job.id, this.options);
  }
  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count/all', this.options);
  }
  public count_running(): Observable<number> {
    return this.http.get<number>(this.url + '/count/running', this.options);
  }
  public count_waiting(): Observable<number> {
    return this.http.get<number>(this.url + '/count/waiting', this.options);
  }
  public count_succesfull(): Observable<number> {
    return this.http.get<number>(this.url + '/count/succesfull', this.options);
  }
  public count_warning(): Observable<number> {
    return this.http.get<number>(this.url + '/count/warning', this.options);
  }
  public count_failed(): Observable<number> {
    return this.http.get<number>(this.url + '/count/failed', this.options);
  }

  //Auth - JWT
  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.sessions.token,
      }),
    };
  }
}
