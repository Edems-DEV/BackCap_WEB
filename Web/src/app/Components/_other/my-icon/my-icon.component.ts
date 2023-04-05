import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-icon',
  templateUrl: './my-icon.component.html',
  styleUrls: ['./my-icon.component.scss'],
})
export class MyIconComponent {
  @Input() name: string = 'add';
}
