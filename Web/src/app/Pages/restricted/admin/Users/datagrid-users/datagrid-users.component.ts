import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../../models/user.model';
import { UsersService } from '../../../../../services/users.service';

@Component({
  selector: 'app-datagrid-users',
  templateUrl: './datagrid-users.component.html',
  styleUrls: ['./datagrid-users.component.scss'],
})
export class DatagridUsersComponent implements OnInit {
  public data: User[];

  public constructor(private service: UsersService, private router: Router) {}

  public ngOnInit(): void {
    console.log('ngOnInit()');
    this.refresh();
  }

  public editUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }

  public deleteUser(user: User): void {
    this.service.delete(user).subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.data = result));
  }
}
