import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Log } from 'src/app/models/log.model';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.scss'],
})
export class FormLogComponent {
  @Input() title: string = 'Create';

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, log: Log): FormGroup {
    return fb.group({
      name: [log.id, [Validators.required]],
      time: [log.time, [Validators.required]],
      message: [log.message, [Validators.required]],
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }
}
