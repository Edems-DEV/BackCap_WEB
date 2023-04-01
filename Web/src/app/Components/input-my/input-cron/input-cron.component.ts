import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-cron',
  templateUrl: './input-cron.component.html',
  styleUrls: ['./input-cron.component.scss'],
})
export class InputCronComponent {
  @Input() label: string = 'Interval';
}
