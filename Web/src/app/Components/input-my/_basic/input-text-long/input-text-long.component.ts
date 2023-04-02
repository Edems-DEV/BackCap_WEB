import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-long',
  templateUrl: './input-text-long.component.html',
  styleUrls: ['./input-text-long.component.scss'],
})
export class InputTextLongComponent {
  @Input() label: string = 'Description';
  @Input() rows: number = 1;
}
