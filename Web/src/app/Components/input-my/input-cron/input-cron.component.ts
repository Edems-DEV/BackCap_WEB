import { Component, Input } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-cron',
  templateUrl: './input-cron.component.html',
  styleUrls: ['./input-cron.component.scss'],
})
export class InputCronComponent {
  public isCollapsed = true;
  @Input() label: string = 'Interval';

  active = 1;
}
