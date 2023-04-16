import { Component, Input, OnInit } from '@angular/core';
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

  public constructor(private fb: FormBuilder, private service: UsersService) {}

  public ngOnInit(): void {
    this.user2 = new User_PSW(this.user, '');
    this.form = FormUserComponent.createForm(this.fb, this.user2);
  }

  public saveUser(values: any): void {
    console.log(this.user2);
    Object.assign(this.user2, values);
    console.log(this.user2);
    this.service.update(this.user2).subscribe();
  }
}
