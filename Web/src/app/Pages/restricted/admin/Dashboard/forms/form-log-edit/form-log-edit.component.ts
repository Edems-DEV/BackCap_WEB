import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { Log } from 'src/app/models/log.model';
import { LogsService } from 'src/app/services/logs/logs.service';
import { FormLogComponent } from '../form-log/form-log.component';

@Component({
  selector: 'app-form-log-edit',
  templateUrl: './form-log-edit.component.html',
  styleUrls: ['./form-log-edit.component.scss'],
})
export class FormLogEditComponent {
  @Input()
  public log: Log;

  @Output()
  refresh_require: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  public constructor(private fb: FormBuilder, private service: LogsService) {}

  public ngOnInit(): void {
    this.form = FormLogComponent.createForm(this.fb, this.log);
  }

  public saveLog(values: any): void {
    Object.assign(this.log, values);
    this.service.update(this.log).subscribe(() => this.refresh());
  }

  public refresh(): void {
    this.refresh_require.emit(this.form.value);
  }
}
