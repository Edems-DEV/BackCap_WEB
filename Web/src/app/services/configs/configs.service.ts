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
    config.interval_end = convertDateFormatToTime(config.interval_end);
    console.log('insert', JSON.stringify(config));
    return this.http.post<Config>(this.url, config, this.options);
  }

  public update(config: Config): Observable<Config> {
    config.interval_end = convertDateFormatToTime(config.interval_end);
    console.log('update machine: ', JSON.stringify(config.interval_end));
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

const isMyFormat = (input: string): boolean => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(input);
};
function convertDateFormatToTime(date: string): string {
  //if date is not in format yyyy-mm-dd, return null
  if (!isMyFormat(date)) {
    console.log('IfBlock: ', date);
    return date;
  }
  console.log('MyFormat: ', date); //run evry time and IDK why

  let [year, month, day] = date.split('-');
  month = month.padStart(2, '0');
  day = day.padStart(2, '0');

  const convertedDate: Date = new Date(`${year}-${month}-${day}T00:00:00`);
  //time is useless because it only the end itnerval no cron
  // const currentDate = new Date();
  // convertedDate.setMinutes(currentDate.getMinutes() + 2);

  return convertedDate.toISOString().toString();
}
