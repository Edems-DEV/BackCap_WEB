import { Component } from '@angular/core';
import { User } from '../../../../../models/user.model';
import { UsersService } from '../../../../../services/users.service';

@Component({
  selector: 'app-datagrid-users',
  templateUrl: './datagrid-users.component.html',
  styleUrls: ['./datagrid-users.component.scss'],
})
export class DatagridUsersComponent {
  users: User[] = [];

  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.users = this.service.findAll();
  }
}
