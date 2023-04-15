import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-form-job',
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.scss'],
})
export class FormJobComponent {
  @Input() title: string = 'Create';

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, job: Job): FormGroup {
    return fb.group({
      name: [job.id, [Validators.required]], //change to name from id
      // description: [job.description, [Validators.required]],
      // type: [job.type, [Validators.required]],
      status: [job.status, [Validators.required]],
      config: [job.id_Config, [Validators.required]], //use title
      machine: [job.machine, [Validators.required]],
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }
}
