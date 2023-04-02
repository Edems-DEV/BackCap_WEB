import { Component } from '@angular/core';

@Component({
  selector: 'app-datagrid-configs',
  templateUrl: './datagrid-configs.component.html',
  styleUrls: ['./datagrid-configs.component.scss'],
})
export class DatagridConfigsComponent {
  configs = CONFIGS;
}

interface Config {
  name: string;
  isZip: boolean;
  type: number;
  rentention: number;
  interval: string;
  destinations: string[];
  sources: string[];
  machines: string[];
  groups: string[];
}

// prettier-ignore
const CONFIGS: Config[] = [
  {
    name: 'Cfg_1',
    isZip: true,
    type: 0,
    rentention: 1,
    interval: 'Every Monday at 9:00',
    destinations: [
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    sources:[
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    machines: ['Pc1', 'Pc2'],
    groups: ['Group_1', 'Group_2'],
  },
  {
    name: 'Cfg_1',
    isZip: false,
    type: 1,
    rentention: 5,
    interval: 'Every Monday at 9:00',
    destinations: [
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    sources:[
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    machines: ['Pc1', 'Pc2'],
    groups: ['Group_1', 'Group_2'],
  },
  {
    name: 'Cfg_3',
    isZip: true,
    type: 2,
    rentention: 4,
    interval: 'Every Monday at 9:00',
    destinations: [
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    sources:[
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    machines: ['Pc1', 'Pc2'],
    groups: ['Group_1', 'Group_2'],
  },
  {
    name: 'Cfg_x',
    isZip: true,
    type: 1,
    rentention: 1,
    interval: 'Every Monday at 9:00',
    destinations: [
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    sources:[
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    machines: ['Pc1', 'Pc2'],
    groups: ['Group_1', 'Group_2'],
  },
  {
    name: 'Cfg_x',
    isZip: true,
    type: 1,
    rentention: 1,
    interval: 'Every Monday at 9:00',
    destinations: [
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    sources:[
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    machines: ['Pc1', 'Pc2'],
    groups: ['Group_1', 'Group_2'],
  },
  {
    name: 'Cfg_x',
    isZip: true,
    type: 1,
    rentention: 1,
    interval: 'Every Monday at 9:00',
    destinations: [
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    sources:[
      'C:\Program Files\Adobe\Adobe Creative Cloud',
      'C:\Program Files',
      'C:\Users\root\Documents'
    ],
    machines: ['Pc1', 'Pc2'],
    groups: ['Group_1', 'Group_2'],
  },
];
