import { Component } from '@angular/core';

@Component({
  selector: 'app-datagrid-users',
  templateUrl: './datagrid-users.component.html',
  styleUrls: ['./datagrid-users.component.scss'],
})
export class DatagridUsersComponent {
  users = USERS;
}

interface User {
  name: string;
  email: string;
  interval: string;
}
const USERS: User[] = [
  {
    name: 'Joe',
    email: 'Joe@gmail.com',
    interval: 'Every Monday at 9:00',
  },
  {
    name: 'Bob',
    email: 'Bob@gmail.com',
    interval: 'Every Friday at 9:00',
  },
  {
    name: 'Alice',
    email: 'Alice@gmail.com',
    interval: 'Every Monday at 9:00',
  },
  {
    name: 'Foo',
    email: 'Foo@gmail.com',
    interval: 'Every Friday at 9:00',
  },
  {
    name: 'Bar',
    email: 'Bar@gmail.com',
    interval: 'Every Friday at 9:00',
  },
  {
    name: 'Baz',
    email: 'Baz@gmail.com',
    interval: 'Every Friday at 9:00',
  },
];
