import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//-----------------------------------------------------------
import { Config } from 'src/app/models/config.model';
import { Machine } from 'src/app/models/machine.model';
import { ConfigsService } from 'src/app/services/configs/configs.service';
//-----------------------------------------------------------
import { FormConfigEditComponent } from 'src/app/Pages/restricted/admin/Configs/forms/form-config-edit/form-config-edit.component';
import { FormConfigCreateComponent } from 'src/app/Pages/restricted/admin/Configs/forms/form-config-create/form-config-create.component';

@Component({
  selector: 'app-datagrid-configs',
  templateUrl: './datagrid-configs.component.html',
  styleUrls: ['./datagrid-configs.component.scss'],
})
export class DatagridConfigsComponent {
  public configs: Config[];

  public constructor(
    private service: ConfigsService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    console.log('ngOnInit()');
    this.refresh();
  }

  //Modal data: Config
  public createConfig(): void {
    this.modalService.open(FormConfigCreateComponent, { centered: true });
  }

  public editConfig(config: Config): void {
    const modalRef = this.modalService.open(FormConfigEditComponent, {
      centered: true,
    });
    modalRef.componentInstance.config = config;
    modalRef.componentInstance.title = 'Edit';
  }

  // public deleteConfig(config: Config): void {
  //   this.service.delete(config).subscribe(() => this.refresh());
  // }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.configs = result));
  }
}
