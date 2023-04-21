import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { User, User_PSW } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-form-user-edit',
  templateUrl: './form-user-edit.component.html',
  styleUrls: ['./form-user-edit.component.scss'],
})
export class FormUserEditComponent {
  @Input()
  public user: User;
  user2: User_PSW;

  form: FormGroup;

  @Output()
  refresh_require: EventEmitter<any> = new EventEmitter<any>();

  public constructor(private fb: FormBuilder, private service: UsersService) {}

  public ngOnInit(): void {
    this.user2 = new User_PSW(this.user, '');
    this.form = FormUserComponent.createForm(this.fb, this.user2);
  }

  public saveUser(values: any): void {
    Object.assign(this.user2, values);
    this.service.update(this.user2).subscribe(() => this.refresh());
  }

  public refresh(): void {
    this.refresh_require.emit(this.form.value);
  }
}
