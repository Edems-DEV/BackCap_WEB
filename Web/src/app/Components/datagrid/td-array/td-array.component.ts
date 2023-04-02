import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-array',
  templateUrl: './td-array.component.html',
  styleUrls: ['./td-array.component.scss'],
})
export class TdArrayComponent {
  @Input() items: any[] | undefined;
}
