import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-btn',
  templateUrl: './sidebar-btn.component.html',
  styleUrls: ['./sidebar-btn.component.scss'],
})
export class SidebarBtnComponent {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() isActive: boolean | undefined;
}
