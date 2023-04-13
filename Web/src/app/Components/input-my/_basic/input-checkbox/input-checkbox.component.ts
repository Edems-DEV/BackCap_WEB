import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent {
  @Input() label: string = '';
  value: boolean;

  @Output() valueChanged = new EventEmitter<boolean>();
  onInput() {
    this.valueChanged.emit(this.value);
  }
}
