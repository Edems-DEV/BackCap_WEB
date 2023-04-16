import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Group } from 'src/app/models/group.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiEndpoint + 'groups';

  public findAll(): Observable<Group[]> {
    return this.http.get<Group[]>(this.url + '?limit=20');
  }

  public findById(id: number): Observable<Group> {
    return this.http.get<Group>(this.url + '/' + id);
  }

  public insert(group: Group): Observable<Group> {
    return this.http.post<Group>(this.url, group);
  }

  public update(group: Group): Observable<Group> {
    return this.http.put<Group>(this.url + '/' + group.id, group);
  }

  public delete(group: Group): Observable<Group> {
    return this.http.delete<Group>(this.url + '/' + group.id);
  }
  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count');
  }
}
