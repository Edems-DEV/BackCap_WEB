import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { User, User_PSW } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-form-user-create',
  templateUrl: './form-user-create.component.html',
  styleUrls: ['./form-user-create.component.scss'],
})
export class FormUserCreateComponent {
  form: FormGroup;

  user: User_PSW;

  public constructor(private fb: FormBuilder, private service: UsersService) {}

  public ngOnInit(): void {
    const tempUser: User = new User(0, '', '', '');
    this.form = FormUserComponent.createForm(
      this.fb,
      new User_PSW(tempUser, '')
    );
  }

  public saveUser(values: any): void {
    this.service.insert(values).subscribe();
  }
}
