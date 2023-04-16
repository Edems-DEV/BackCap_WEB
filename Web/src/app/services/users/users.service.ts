import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User, User_PSW } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiEndpoint + 'users';

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '?limit=20');
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  public insert(user: User_PSW): Observable<User_PSW> {
    return this.http.post<User_PSW>(this.url, user);
  }

  public update(user: User_PSW): Observable<User_PSW> {
    console.log('update machine: ', user);
    return this.http.put<User_PSW>(this.url + '/' + user.id, user);
  }

  public delete(user: User): Observable<User> {
    console.log('delete machine: ', user);
    return this.http.delete<User>(this.url + '/' + user.id);
  }
  //--------------------------------------------------------------
  public count(): Observable<number> {
    return this.http.get<number>(this.url + '/count');
  }
}
