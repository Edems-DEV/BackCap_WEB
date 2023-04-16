import {
  Component,
  forwardRef,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSwitchComponent),
      multi: true,
    },
  ],
})
export class InputSwitchComponent {
  @Input() label: string = '';
  @Input() value: boolean = false;

  @Input() public parentForm: FormGroup;
  @Input() public fieldName: string;
  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  constructor() {}

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: boolean) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onInput() {
    //onInput
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
