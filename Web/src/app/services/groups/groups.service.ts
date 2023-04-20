import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Group } from 'src/app/models/group.model';
import { ConfigName } from 'src/app/models/names.model';

import { environment } from 'src/environments/environment';
import { SessionsService } from 'src/app/services/auth/sessions.service';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient, private sessions: SessionsService) {}

  url: string = environment.apiEndpoint + 'groups';

  public findAll(): Observable<Group[]> {
    return this.http.get<Group[]>(this.url + '?limit=20', this.options);
  }

  public findById(id: number): Observable<Group> {
    return this.http.get<Group>(this.url + '/' + id, this.options);
  }

  public insert(group: Group): Observable<Group> {
    console.log('insert', group);
    return this.http.post<Group>(this.url, group, this.options);
  }

  public update(group: Group): Observable<Group> {
    console.log('update', group);
    return this.http.put<Group>(this.url + '/' + group.id, group, this.options);
  }

  public delete(group: Group): Observable<Group> {
    return this.http.delete<Group>(this.url + '/' + group.id, this.options);
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
