import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:5056/api/Users';

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  public insert(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(this.url + '/' + user.id, user);
  }

  public delete(user: User): Observable<User> {
    return this.http.delete<User>(this.url + '/' + user.id);
  }
}

// //simulate a database data
// private users: User[] = [
//   {
//     id: 1,
//     name: 'Joe',
//     email: 'Joe@gmail.com',
//     interval: '12345',
//   },
//   {
//     id: 2,
//     name: 'Bob',
//     email: 'Bob@gmail.com',
//     interval: '12345',
//   },
//   {
//     id: 3,
//     name: 'Alice',
//     email: 'Alice@gmail.com',
//     interval: '12345',
//   },
//   {
//     id: 4,
//     name: 'Foo',
//     email: 'Foo@gmail.com',
//     interval: '12345',
//   },
// ];
