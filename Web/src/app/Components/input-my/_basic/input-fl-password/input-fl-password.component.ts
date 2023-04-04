import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-fl-password',
  templateUrl: './input-fl-password.component.html',
  styleUrls: ['./input-fl-password.component.scss'],
})
export class InputFlPasswordComponent {
  @Input() label: string = 'Password';
  @Input() value: string = '';
  //--------------------------
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
