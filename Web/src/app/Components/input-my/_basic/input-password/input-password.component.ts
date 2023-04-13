import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() class: string = '';
  //--------------------------
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  //--------------------------
  @Output() valueChanged = new EventEmitter<string>();
  onInput() {
    this.valueChanged.emit(this.value);
  }
}
