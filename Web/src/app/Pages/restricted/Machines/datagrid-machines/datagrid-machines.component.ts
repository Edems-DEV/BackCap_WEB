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
    name: 'Pc_2',
    description: 'SupaPC',
    status: 2,
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_2',
    description: 'SupaPC',
    status: 1,
    group: ['group1', 'group2'],
    config: ['config1', 'config2', 'config3', 'config3'],
  },
];
