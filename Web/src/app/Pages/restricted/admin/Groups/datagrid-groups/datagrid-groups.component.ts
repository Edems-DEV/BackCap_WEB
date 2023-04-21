import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//-----------------------------------------------------------
import { Group } from 'src/app/models/group.model';
import { GroupsService } from 'src/app/services/groups/groups.service';
//-----------------------------------------------------------
import { FormGroupEditComponent } from 'src/app/Pages/restricted/admin/Groups/forms/form-group-edit/form-group-edit.component';
import { FormGroupCreateComponent } from 'src/app/Pages/restricted/admin/Groups/forms/form-group-create/form-group-create.component';

@Component({
  selector: 'app-datagrid-groups',
  templateUrl: './datagrid-groups.component.html',
  styleUrls: ['./datagrid-groups.component.scss'],
})
export class DatagridGroupsComponent {
  public groups: Group[];

  public constructor(
    private service: GroupsService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.refresh();
  }

  Modaldata: Group;
  public createGroup(): void {
    const modalRef = this.modalService.open(FormGroupCreateComponent, {
      centered: true,
    });
    modalRef.componentInstance.refresh_require.subscribe(() => this.refresh());
  }

  public editGroup(group: Group): void {
    const modalRef = this.modalService.open(FormGroupEditComponent, {
      centered: true,
    });
    modalRef.componentInstance.group = group;
    modalRef.componentInstance.title = 'Edit';
    modalRef.componentInstance.refresh_require.subscribe(() => this.refresh());
  }

  public deleteGroup(group: Group): void {
    this.service.delete(group).subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.groups = result));
  }
}
