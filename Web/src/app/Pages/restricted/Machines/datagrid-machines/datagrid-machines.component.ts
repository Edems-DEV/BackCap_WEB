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
  group: string[];
  config: string[];
}
const MACHINES: Machine[] = [
  {
    name: 'Pc_1',
    description: 'SupaPC',
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_2',
    description: 'SupaPC',
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_2',
    description: 'SupaPC',
    group: ['group1', 'group2'],
    config: ['config1', 'config2'],
  },
  {
    name: 'Pc_2',
    description: 'SupaPC',
    group: ['group1', 'group2'],
    config: ['config1', 'config2', 'config3', 'config3'],
  },
];
