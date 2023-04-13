import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.scss'],
})
export class BtnAddComponent {
  @Output() clicked = new EventEmitter<void>();
  onButtonClick() {
    this.clicked.emit();
  }
}
