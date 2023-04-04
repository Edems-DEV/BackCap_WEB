import { Component } from '@angular/core';

@Component({
  selector: 'app-datagrid-machines',
  templateUrl: './datagrid-machines.component.html',
  styleUrls: ['./datagrid-machines.component.scss'],
})
export class DatagridMachinesComponent {
  machines = MACHINES;
}

interface Machine {
  name: string;
  description: string;
  status: number;
  group: string[];
  config: string[];
}
const MACHINES: Machine[] = [
  {
    name: 'Pc_1',
    description: 'SupaPC',
    status: 0,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_2',
    description: 'SupaPC',
    status: 1,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_3',
    description: 'SupaPC',
    status: 2,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_4',
    description: 'SupaPC',
    status: 2,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_5',
    description: 'SupaPC',
    status: 1,
    group: ['group1', 'group2'],
    config: ['config1', 'config2', 'config3', 'config3'],
  },
  {
    name: 'Pc_6',
    description: 'SupaPC',
    status: 0,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_7',
    description: 'SupaPC',
    status: 2,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_8',
    description: 'SupaPC',
    status: 1,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_9',
    description: 'SupaPC',
    status: 2,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_10',
    description: 'SupaPC',
    status: 1,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_11',
    description: 'SupaPC',
    status: 0,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_12',
    description: 'SupaPC',
    status: 2,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_13',
    description: 'SupaPC',
    status: 2,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_14',
    description: 'SupaPC',
    status: 1,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_15',
    description: 'SupaPC',
    status: 2,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
];
