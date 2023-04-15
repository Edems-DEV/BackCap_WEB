import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { Job } from 'src/app/models/job.model';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { FormJobComponent } from '../form-job/form-job.component';

@Component({
  selector: 'app-form-job-edit',
  templateUrl: './form-job-edit.component.html',
  styleUrls: ['./form-job-edit.component.scss'],
})
export class FormJobEditComponent {
  @Input()
  public job: Job;

  form: FormGroup;

  public constructor(private fb: FormBuilder, private service: JobsService) {}

  public ngOnInit(): void {
    this.form = FormJobComponent.createForm(this.fb, this.job);
  }

  public saveJob(values: any): void {
    Object.assign(this.job, values);
    this.service.update(this.job).subscribe();
  }
}
