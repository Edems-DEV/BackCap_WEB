import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar-btn-settings',
  templateUrl: './sidebar-btn-settings.component.html',
  styleUrls: ['./sidebar-btn-settings.component.scss'],
})
export class SidebarBtnSettingsComponent {
  constructor(private modalService: NgbModal) {}
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  @Input() username: string = '?';
}
