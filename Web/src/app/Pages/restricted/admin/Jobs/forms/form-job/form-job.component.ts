import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/app/models/job.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
      id: [job.id, [Validators.required]], //change to name from id
      target: [job.target, [Validators.required]],
      status: [job.status, [Validators.required]],
      config: [job.config.name, [Validators.required]],
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
    close();
  }

  public close(): void {
    this.modalService.dismissAll();
  }

  constructor(private modalService: NgbModal) {}
}
