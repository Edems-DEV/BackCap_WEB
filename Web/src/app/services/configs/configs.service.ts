import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Config } from 'src/app/models/config.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigsService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiEndpoint + 'configs';

  public findAll(): Observable<Config[]> {
    return this.http.get<Config[]>(this.url);
  }

  public findById(id: number): Observable<Config> {
    return this.http.get<Config>(this.url + '/' + id);
  }

  public insert(config: Config): Observable<Config> {
    return this.http.post<Config>(this.url, config);
  }

  public update(config: Config): Observable<Config> {
    return this.http.put<Config>(this.url + '/' + config.id, config);
  }

  public delete(config: Config): Observable<Config> {
    return this.http.delete<Config>(this.url + '/' + config.id);
  }
}
