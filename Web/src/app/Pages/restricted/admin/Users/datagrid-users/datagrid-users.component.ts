import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { FormUserComponent } from '../forms/form-user/form-user.component';
import { FormUserEditComponent } from '../forms/form-user-edit/form-user-edit.component';
import { FormUserCreateComponent } from '../forms/form-user-create/form-user-create.component';

@Component({
  selector: 'app-datagrid-users',
  templateUrl: './datagrid-users.component.html',
  styleUrls: ['./datagrid-users.component.scss'],
})
export class DatagridUsersComponent implements OnInit {
  public data: User[];

  public constructor(
    private service: UsersService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    console.log('ngOnInit()');
    this.refresh();
  }

  //Modal data: User
  public createUser(): void {
    this.modalService.open(FormUserCreateComponent, { centered: true });
  }

  public editUser(user: User): void {
    const modalRef = this.modalService.open(FormUserEditComponent, {
      centered: true,
    });
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.title = 'Edit';
  }

  public deleteUser(user: User): void {
    this.service.delete(user).subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.data = result));
  }
}
