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
    machines: ['Pc1', 'Pc2', 'Pc1', 'Pc2'],
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
  {
    name: 'Group_5',
    description: 'Fifth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_6',
    description: 'Sixth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_7',
    description: 'Seventh group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_8',
    description: 'Eighth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_9',
    description: 'Ninth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_10',
    description: 'Tenth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_11',
    description: 'Eleventh group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_12',
    description: 'Twelfth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_13',
    description: 'Thirteenth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_14',
    description: 'Fourteenth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_15',
    description: 'Fifteenth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_16',
    description: 'Sixteenth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_17',
    description: 'Seventeenth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_18',
    description: 'Eighteenth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_19',
    description: 'Nineteenth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
  {
    name: 'Group_20',
    description: 'Twentieth group',
    machines: ['Pc1', 'Pc2'],
    configs: ['config1', 'config2'],
  },
];
