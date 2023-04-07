import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../../models/user.model';
import { UsersService } from '../../../../../services/users.service';

@Component({
  selector: 'app-datagrid-users',
  templateUrl: './datagrid-users.component.html',
  styleUrls: ['./datagrid-users.component.scss'],
})
export class DatagridUsersComponent {
  users: User[] = [];

  constructor(private router: Router, private service: UsersService) {}

  ngOnInit(): void {
    this.users = this.service.findAll();
  }

  public edit(user: User): void {
    this.router.navigate(['admin/users', user.id]);
  }
}
