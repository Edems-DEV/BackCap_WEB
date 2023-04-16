import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from 'src/app/models/config.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  MachineName,
  GroupName,
  Source,
  Destination,
} from 'src/app/models/names.model';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.scss'],
})
export class FormConfigComponent {
  @Input() title: string = 'Create';

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, config: Config): FormGroup {
    return fb.group({
      name: [config.name, [Validators.required]],
      descripton: [config.description, [Validators.required]],
      type: [config.type, [Validators.required]],
      isCompressed: [config.isCompressed, [Validators.required]],
      //---------------------------------------------------------
      packageSize: [config.packageSize, [Validators.required]],
      retention: [config.retention, [Validators.required]],
      //---------------------------------------------------------
      backup_interval: [config.interval, [Validators.required]],
      interval_end: [config.interval_end, [Validators.required]],
      //---------------------------------------------------------
      sources: [config.sources, [Validators.required]],
      destinations: [config.destinations, [Validators.required]],
      //---------------------------------------------------------
      computer: [config.machine, [Validators.required]],
      group: [config.group, [Validators.required]],
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
