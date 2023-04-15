import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { Machine } from 'src/app/models/machine.model';
import { MachinesService } from 'src/app/services/machines/machines.service';
import { FormMachineComponent } from '../form-machine/form-machine.component';

@Component({
  selector: 'app-form-machine-edit',
  templateUrl: './form-machine-edit.component.html',
  styleUrls: ['./form-machine-edit.component.scss'],
})
export class FormMachineEditComponent {
  @Input()
  public machine: Machine;

  form: FormGroup;

  public constructor(
    private fb: FormBuilder,
    private service: MachinesService
  ) {}

  public ngOnInit(): void {
    this.form = FormMachineComponent.createForm(this.fb, this.machine);
  }

  public saveMachine(values: any): void {
    Object.assign(this.machine, values);
    this.service.update(this.machine).subscribe();
  }
}
