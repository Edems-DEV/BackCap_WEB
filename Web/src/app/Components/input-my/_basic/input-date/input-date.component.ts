import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent {
  @Input() label: string | undefined;
  @Input() value: string = '';

  @Output() valueChanged = new EventEmitter<string>();
  onInput() {
    this.valueChanged.emit(this.value);
  }
}
