import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from 'src/app/models/group.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MachinesService } from 'src/app/services/machines/machines.service';
import { ConfigsService } from 'src/app/services/configs/configs.service';
import { MachineName, ConfigName } from 'src/app/models/names.model';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  @Input() title: string = 'Create';

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  //data for dropdown
  pcList: MachineName[];
  cfgList: ConfigName[];

  constructor(
    private modalService: NgbModal,
    private service: MachinesService,
    private service2: ConfigsService
  ) {
    this.service.getNames().subscribe((data) => {
      this.pcList = data;
    });
    this.service2.getNames().subscribe((data) => {
      this.cfgList = data;
    });
    console.log(this.pcList);
  }

  public static createForm(fb: FormBuilder, group: Group): FormGroup {
    return fb.group({
      name: [group.name, [Validators.required]],
      description: [group.description, [Validators.required]],
      configs: [group.configs],
      machines: [group.machines],
    });
  }

  public save(): void {
    console.log('saved', this.form.value);
    this.saved.emit(this.form.value);
    this.modalService.dismissAll();
  }

  public close(): void {
    this.modalService.dismissAll();
  }
}
