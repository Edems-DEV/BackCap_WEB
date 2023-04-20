import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Log } from 'src/app/models/log.model';

import { environment } from 'src/environments/environment';
import { SessionsService } from 'src/app/services/auth/sessions.service';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private http: HttpClient, private sessions: SessionsService) {}

  url: string = environment.apiEndpoint + 'logs';

  public findAll(): Observable<Log[]> {
    return this.http.get<Log[]>(this.url + '?limit=10', this.options);
  }

  public findById(id: number): Observable<Log> {
    return this.http.get<Log>(this.url + '/' + id, this.options);
  }

  public insert(log: Log): Observable<Log> {
    return this.http.post<Log>(this.url, log, this.options);
  }

  public update(log: Log): Observable<Log> {
    return this.http.put<Log>(this.url + '/' + log.id, log, this.options);
  }

  public delete(log: Log): Observable<Log> {
    return this.http.delete<Log>(this.url + '/' + log.id, this.options);
  }
  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count', this.options);
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
