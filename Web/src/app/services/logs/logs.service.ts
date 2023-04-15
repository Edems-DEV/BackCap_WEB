import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Log } from 'src/app/models/log.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiEndpoint + 'logs';

  public findAll(): Observable<Log[]> {
    return this.http.get<Log[]>(this.url);
  }

  public findById(id: number): Observable<Log> {
    return this.http.get<Log>(this.url + '/' + id);
  }

  public insert(log: Log): Observable<Log> {
    return this.http.post<Log>(this.url, log);
  }

  public update(log: Log): Observable<Log> {
    return this.http.put<Log>(this.url + '/' + log.id, log);
  }

  public delete(log: Log): Observable<Log> {
    return this.http.delete<Log>(this.url + '/' + log.id);
  }
  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count');
  }
}
