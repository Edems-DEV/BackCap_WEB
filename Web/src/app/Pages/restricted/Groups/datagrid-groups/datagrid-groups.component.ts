import { Component } from '@angular/core';

@Component({
  selector: 'app-datagrid-groups',
  templateUrl: './datagrid-groups.component.html',
  styleUrls: ['./datagrid-groups.component.scss'],
})
export class DatagridGroupsComponent {
  groups = GROUPS;
}

interface Group {
  name: string;
  description: string;
  machines: string[];
  configs: string[];
}
const GROUPS: Group[] = [
  {
    name: 'Group_1',
    description: 'First group',
    machines: [
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
      'Pc1',
      'Pc2',
    ],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_2',
    description: 'Second group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_3',
    description: 'Third group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_4',
    description: 'Fourth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2', 'config3', 'config3'],
  },
];
