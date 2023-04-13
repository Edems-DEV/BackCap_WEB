import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
})
export class InputSwitchComponent {
  @Input() label: string = '';
  @Input() value: boolean = false;

  @Output() valueChanged = new EventEmitter<boolean>();
  onInput() {
    this.valueChanged.emit(this.value);
  }
}
