import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent {
  @Input() label: string | undefined;
  @Input() placeholder: string = '';
  @Input() value: string = '';
  //--------------------------
  @Output() valueChanged = new EventEmitter<string>();
  onInput() {
    this.valueChanged.emit(this.value);
  }
}
