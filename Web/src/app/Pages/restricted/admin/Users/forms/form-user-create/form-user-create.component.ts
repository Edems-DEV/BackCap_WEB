import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../../../models/user.model';
import { UsersService } from '../../../../../../services/users.service';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-form-user-create',
  templateUrl: './form-user-create.component.html',
  styleUrls: ['./form-user-create.component.scss'],
})
export class FormUserCreateComponent {
  form: FormGroup;

  user: User;

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsersService
  ) {}

  public ngOnInit(): void {
    this.form = FormUserComponent.createForm(
      this.fb,
      new User(0, '', '', '', '')
    );
  }

  public saveUser(values: any): void {
    this.service
      .insert(values)
      .subscribe(() => this.router.navigate(['/users']));
  }
}
