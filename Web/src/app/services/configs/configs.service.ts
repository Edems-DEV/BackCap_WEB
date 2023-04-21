import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Config } from 'src/app/models/config.model';
import { ConfigName } from 'src/app/models/names.model';

import { environment } from 'src/environments/environment';
import { SessionsService } from 'src/app/services/auth/sessions.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigsService {
  constructor(private http: HttpClient, private sessions: SessionsService) {}

  url: string = environment.apiEndpoint + 'configs';

  public findAll(): Observable<Config[]> {
    return this.http.get<Config[]>(this.url + '?limit=10', this.options);
  }

  public findById(id: number): Observable<Config> {
    return this.http.get<Config>(this.url + '/' + id, this.options);
  }

  public insert(config: Config): Observable<Config> {
    console.log('insert', config);
    return this.http.post<Config>(this.url, config, this.options);
  }

  public update(config: Config): Observable<Config> {
    return this.http.put<Config>(
      this.url + '/' + config.id,
      config,
      this.options
    );
  }

  public delete(config: Config): Observable<Config> {
    return this.http.delete<Config>(this.url + '/' + config.id, this.options);
  }
  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count', this.options);
  }
  //--------------------------------------------------------------
  public getNames(): Observable<ConfigName[]> {
    return this.http.get<ConfigName[]>(this.url + '/names', this.options);
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
