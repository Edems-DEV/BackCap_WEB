import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

import { User, User_PSW } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { SessionsService } from 'src/app/services/auth/sessions.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private sessions: SessionsService,
    private router: Router
  ) {}

  url: string = environment.apiEndpoint + 'users';

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '?limit=20', this.options);
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id, this.options);
  }

  public insert(user: User_PSW): Observable<User_PSW> {
    return this.http.post<User_PSW>(this.url, user, this.options);
  }

  public update(user: User_PSW): Observable<User_PSW> {
    console.log('update machine: ', user);
    return this.http.put<User_PSW>(
      this.url + '/' + user.id,
      user,
      this.options
    );
  }

  public delete(user: User): Observable<User> {
    console.log('API-delete:' + user.name);
    return this.http.delete<User>(this.url + '/' + user.id, this.options);
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

  //token data
  public findProfile(): Observable<User> {
    return this.http.get<User>(
      this.url +
        '/' +
        new JwtHelperService().decodeToken(this.sessions.loadToken())['userId'],
      this.options
    );
  }
}
