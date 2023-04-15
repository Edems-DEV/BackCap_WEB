import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-path',
  templateUrl: './input-path.component.html',
  styleUrls: ['./input-path.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPathComponent),
      multi: true,
    },
  ],
})
export class InputPathComponent {
  @Input() label: string | undefined;

  items: string[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  deleteItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
