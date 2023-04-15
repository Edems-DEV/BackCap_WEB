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
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true,
    },
  ],
})
export class InputCheckboxComponent {
  @Input() label: string = '';
  value: boolean;

  @Output() valueChanged = new EventEmitter<boolean>();
  onInput() {
    this.valueChanged.emit(this.value);
  }
}
