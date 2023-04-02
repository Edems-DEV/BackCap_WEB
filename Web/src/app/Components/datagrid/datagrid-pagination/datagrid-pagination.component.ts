import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datagrid-pagination',
  templateUrl: './datagrid-pagination.component.html',
  styleUrls: ['./datagrid-pagination.component.scss'],
})
export class DatagridPaginationComponent {
  //@Input() label: string | undefined;
  //TODO: add dinamic label
  @Input() offset: number = 1;
  @Input() limit: number = 20;
  @Input() total: number = 27;
}
