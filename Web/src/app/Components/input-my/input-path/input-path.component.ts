import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Path } from 'src/app/models/names.model';

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

  items: Path[] = [];
  newItem: string = '';

  @Input() public parentForm: FormGroup;
  @Input() public fieldName: string;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  ngOnInit(): void {
    //this.items = this.formField.value;
    this.formField.value.forEach((element) => {
      this.items.push(element);
    });
  }

  addItem() {
    if (this.newItem !== '') {
      let temp: Path = { id: 0, name: this.newItem };
      this.items.push(temp);
      this.formField.setValue(this.items); //not efficient
      this.newItem = '';
    }
  }

  deleteItem(item: Path) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.formField.setValue(this.items); //not efficient
    }
  }
}
