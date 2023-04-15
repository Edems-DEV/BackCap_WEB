import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Machine } from 'src/app/models/machine.model';

@Component({
  selector: 'app-form-machine',
  templateUrl: './form-machine.component.html',
  styleUrls: ['./form-machine.component.scss'],
})
export class FormMachineComponent {
  @Input() title: string = 'Create';

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, machine: Machine): FormGroup {
    return fb.group({
      name: [machine.name, [Validators.required]],
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }
}
