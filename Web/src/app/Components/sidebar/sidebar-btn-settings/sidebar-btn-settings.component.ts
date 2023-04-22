import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/auth/sessions.service';
import { UsersService } from 'src/app/services/users/users.service';
import { User, User_PSW } from 'src/app/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar-btn-settings',
  templateUrl: './sidebar-btn-settings.component.html',
  styleUrls: ['./sidebar-btn-settings.component.scss'],
})
export class SidebarBtnSettingsComponent {
  username: string = 'User_1';
  email: string = 'user1@gmail.com';
  interval: string = '* * * * *';

  user: User_PSW;
  form: FormGroup;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private sessions: SessionsService,
    private userService: UsersService,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.userService.findProfile().subscribe((user) => {
      this.user = new User_PSW(user, '');
      this.form = this.fb.group({
        name: [user.name, [Validators.required]],
        email: [user.email, [Validators.required]], //, Validators.email
        interval_Report: user.interval_Report,
      });
    });
  }

  public save(): void {
    console.log('edit-user: '); //, JSON.stringify(values)
    Object.assign(this.user, this.form.value);
    this.userService.update(this.user).subscribe();
    this.modalService.dismissAll();
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  //Auth
  public logout(): void {
    this.sessions.logout();
    this.router.navigate(['/login']);
  }
}
