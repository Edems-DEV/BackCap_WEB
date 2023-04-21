import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/auth/sessions.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-sidebar-btn-settings',
  templateUrl: './sidebar-btn-settings.component.html',
  styleUrls: ['./sidebar-btn-settings.component.scss'],
})
export class SidebarBtnSettingsComponent {
  username: string = 'User_1';
  email: string = 'user1@gmail.com';
  interval: string = '* * * * *';

  constructor(
    private modalService: NgbModal,
    private sessions: SessionsService,
    private router: Router,
    private userService: UsersService
  ) {}

  public ngOnInit(): void {
    console.log('ngOnInit - SidebarBtnSettingsComponent');
    this.userService.updateProfile();
    this.userService.findProfile().subscribe((user) => {
      this.username = this.usernameFromMail(user.email);
      this.email = user.email;
      this.interval = user.interval_Report;
    });
  }

  usernameFromMail(username: string): string {
    return username.split('@')[0];
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
