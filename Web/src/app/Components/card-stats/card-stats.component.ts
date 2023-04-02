import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss'],
})
export class CardStatsComponent {
  @Input() label: string | undefined = 'Label';
  @Input() stat: number | undefined = 40;
  @Input() route: string = '.';
}
