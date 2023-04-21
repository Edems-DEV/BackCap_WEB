import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/auth/sessions.service';

@Component({
  selector: 'app-sidebar-btn-settings',
  templateUrl: './sidebar-btn-settings.component.html',
  styleUrls: ['./sidebar-btn-settings.component.scss'],
})
export class SidebarBtnSettingsComponent {
  @Input() username: string = '?';

  constructor(
    private modalService: NgbModal,
    private sessions: SessionsService,
    private router: Router
  ) {}

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  //Auth
  public logout(): void {
    this.sessions.logout();
    this.router.navigate(['/login']);
  }
}
