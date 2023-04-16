import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Job } from 'src/app/models/job.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiEndpoint + 'jobs';

  public findAll(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url + '?limit=15');
  }

  public findById(id: number): Observable<Job> {
    return this.http.get<Job>(this.url + '/' + id);
  }

  public insert(job: Job): Observable<Job> {
    return this.http.post<Job>(this.url, job);
  }

  public update(job: Job): Observable<Job> {
    return this.http.put<Job>(this.url + '/' + job.id, job);
  }

  public delete(job: Job): Observable<Job> {
    return this.http.delete<Job>(this.url + '/' + job.id);
  }
  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count/all');
  }
  public count_active(): Observable<number> {
    return this.http.get<number>(this.url + '/count/active');
  }
  public count_disable(): Observable<number> {
    return this.http.get<number>(this.url + '/count/disable');
  }
  public count_broken(): Observable<number> {
    return this.http.get<number>(this.url + '/count/broken');
  }
}
