import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../../../../models/user.model';
import { UsersService } from '../../../../../../services/users.service';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-form-user-edit',
  templateUrl: './form-user-edit.component.html',
  styleUrls: ['./form-user-edit.component.scss'],
})
export class FormUserEditComponent {
  @Input()
  public user: User;

  form: FormGroup;

  public constructor(private fb: FormBuilder, private service: UsersService) {}

  public ngOnInit(): void {
    this.form = FormUserComponent.createForm(this.fb, this.user);
    console.log(this.user); //user is filled with data
  }

  public saveUser(values: any): void {
    /*this.user.name = values.name;
    this.user.surname = values.surname;
    this.user.email = values.email;*/

    Object.assign(this.user, values);
    this.service.update(this.user);
    //.subscribe(() => this.router.navigate(['/users']));
  }
}
