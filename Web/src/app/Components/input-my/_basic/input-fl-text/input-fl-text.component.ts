import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-fl-text',
  templateUrl: './input-fl-text.component.html',
  styleUrls: ['./input-fl-text.component.scss'],
})
export class InputFlTextComponent {
  @Input() label: string = 'Email';
  @Input() type: string = 'email';
  @Input() placeholder: string = '';
  @Input() value: string = '';

  @Output() valueChanged = new EventEmitter<string>();
  onInput() {
    this.valueChanged.emit(this.value);
  }
}
