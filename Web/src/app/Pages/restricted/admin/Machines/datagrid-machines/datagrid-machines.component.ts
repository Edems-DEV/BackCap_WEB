import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//-----------------------------------------------------------
import { Machine } from 'src/app/models/machine.model';
import { MachinesService } from 'src/app/services/machines/machines.service';
//-----------------------------------------------------------
import { FormMachineEditComponent } from 'src/app/Pages/restricted/admin/Machines/forms/form-machine-edit/form-machine-edit.component';
//import { FormMachineCreateComponent } from 'src/app/Pages/restricted/admin/Machines/forms/form-machine-create/form-machine-create.component';

@Component({
  selector: 'app-datagrid-machines',
  templateUrl: './datagrid-machines.component.html',
  styleUrls: ['./datagrid-machines.component.scss'],
})
export class DatagridMachinesComponent {
  public machines: Machine[];

  public constructor(
    private service: MachinesService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.refresh();
  }

  //Modal data: Machine
  // public createMachine(): void {
  //   this.modalService.open(FormMachineCreateComponent, { centered: true });
  // }

  public editMachine(machine: Machine): void {
    const modalRef = this.modalService.open(FormMachineEditComponent, {
      centered: true,
    });
    modalRef.componentInstance.machine = machine;
    modalRef.componentInstance.title = 'Edit';
    modalRef.componentInstance.refresh_require.subscribe(() => this.refresh());
  }

  public deleteMachine(machine: Machine): void {
    this.service.delete(machine).subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.machines = result));
  }
}
