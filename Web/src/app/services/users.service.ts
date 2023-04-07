import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //simulate a database data
  private users: User[] = [
    {
      id: 1,
      name: 'Joe',
      email: 'Joe@gmail.com',
      interval: '12345',
    },
    {
      id: 2,
      name: 'Bob',
      email: 'Bob@gmail.com',
      interval: '12345',
    },
    {
      id: 3,
      name: 'Alice',
      email: 'Alice@gmail.com',
      interval: '12345',
    },
    {
      id: 3,
      name: 'Alice',
      email: 'Alice@gmail.com',
      interval: '12345',
    },
    {
      id: 4,
      name: 'Foo',
      email: 'Foo@gmail.com',
      interval: '12345',
    },
  ];

  constructor() {}

  public findAll(): User[] {
    return this.users;
  }

  public findById(id: number): User | null {
    for (let item of this.users) {
      if (item.id === id) {
        return item;
      }
    }

    return null;
  }
}
