import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//-----------------------------------------------------------
import { Log } from 'src/app/models/log.model';
import { LogsService } from 'src/app/services/logs/logs.service';
//-----------------------------------------------------------
import { FormLogEditComponent } from 'src/app/Pages/restricted/admin/Dashboard/forms/form-log-edit/form-log-edit.component';
//import { FormLogCreateComponent } from 'src/app/Pages/restricted/admin/Dashboard/forms/form-log-create/form-log-create.component';

@Component({
  selector: 'app-datagrid-logs',
  templateUrl: './datagrid-logs.component.html',
  styleUrls: ['./datagrid-logs.component.scss'],
})
export class DatagridLogsComponent {
  public logs: Log[];

  public constructor(
    private service: LogsService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.refresh();
  }

  //Modal data: Log
  // public createLog(): void {
  //   this.modalService.open(FormLogCreateComponent, { centered: true });
  // }

  public editLog(log: Log): void {
    const modalRef = this.modalService.open(FormLogEditComponent, {
      centered: true,
    });
    modalRef.componentInstance.log = log;
    modalRef.componentInstance.title = 'Edit';
  }

  public deleteLog(log: Log): void {
    this.service.delete(log).subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.logs = result));
  }
}
