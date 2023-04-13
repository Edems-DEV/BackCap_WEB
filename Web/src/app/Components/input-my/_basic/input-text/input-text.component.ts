import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() label: string = 'Name';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() class: string = '';

  @Output() valueChanged = new EventEmitter<string>();

  onInput() {
    this.valueChanged.emit(this.value);
  }
}
