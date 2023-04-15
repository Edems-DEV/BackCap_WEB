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

  @Output() valueChanged = new EventEmitter<boolean>();
  onInput() {
    this.valueChanged.emit(this.value);
  }
}
