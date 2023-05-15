import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Machine } from 'src/app/models/machine.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GroupsService } from 'src/app/services/groups/groups.service';
import { ConfigsService } from 'src/app/services/configs/configs.service';
import { GroupName, ConfigName } from 'src/app/models/names.model';

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
      description: [machine.description, [Validators.required]],
      ip_Address: [machine.ip_Address, [Validators.required]],
      is_Active: [machine.is_Active, [Validators.required]],
      configs: [machine.config],
      groups: [machine.groups],
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
    this.modalService.dismissAll();
  }

  public close(): void {
    this.modalService.dismissAll();
  }

  constructor(
    private modalService: NgbModal,
    private service: GroupsService,
    private service2: ConfigsService
  ) {
    this.service.getNames().subscribe((data) => {
      this.groupList = data;
    });
    this.service2.getNames().subscribe((data) => {
      this.cfgList = data;
    });
    console.log(this.groupList);
  }

  //data for dropdown
  groupList: GroupName[];
  cfgList: ConfigName[];
}
