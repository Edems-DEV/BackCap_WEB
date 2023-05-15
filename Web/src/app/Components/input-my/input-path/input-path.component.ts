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

  @Input() public parentForm: FormGroup;
  @Input() public fieldName: string;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  ngOnInit(): void {
    this.items = this.formField.value;
  }

  addItem() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.formField.setValue(this.items); //not efficient
      this.newItem = '';
    }
  }

  deleteItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.formField.setValue(this.items); //not efficient
    }
  }
}
