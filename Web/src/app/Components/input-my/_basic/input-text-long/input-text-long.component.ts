import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-text-long',
  templateUrl: './input-text-long.component.html',
  styleUrls: ['./input-text-long.component.scss'],
})
export class InputTextLongComponent {
  @Input() label: string = 'Description';
  @Input() rows: number = 1;
  @Input() value: string = '';
  @Input() class: string = '';

  @Output() valueChanged = new EventEmitter<string>();

  onInput() {
    this.valueChanged.emit(this.value);
  }
}
