import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//-----------------------------------------------------------
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';
//-----------------------------------------------------------
import { FormUserEditComponent } from 'src/app/Pages/restricted/admin/Users/forms/form-user-edit/form-user-edit.component';
import { FormUserCreateComponent } from 'src/app/Pages/restricted/admin/Users/forms/form-user-create/form-user-create.component';

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
    this.refresh();
  }

  //Modal data: User
  public createUser(): void {
    const modalRef = this.modalService.open(FormUserCreateComponent, {
      centered: true,
    });
    modalRef.componentInstance.refresh_require.subscribe(() => this.refresh());
  }

  public editUser(user: User): void {
    const modalRef = this.modalService.open(FormUserEditComponent, {
      centered: true,
    });
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.title = 'Edit';
    modalRef.componentInstance.refresh_require.subscribe(() => this.refresh());
  }

  public deleteUser(user: User): void {
    this.service.delete(user).subscribe(() => {
      this.refresh(); //, console.log('2/2 deleteUser: ' + user.name);
    });
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => {
      this.data = result; //, console.log('refresh: ', this.data);
    });
  }
}
