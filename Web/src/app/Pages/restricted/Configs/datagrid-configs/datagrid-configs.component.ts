import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

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
  type: string;
  rentention: number;
  interval: string;
  destinations: string[];
  sources: string[];
  machines: string[];
  groups: string[];
}

// const values = [
//   { value: 0, title: 'full', class: 'chip-green' },
//   { value: 1, title: 'diff', class: 'chip-orange' },
//   { value: 2, title: 'Inc', class: 'chip-blue' },
// ];

// prettier-ignore
const CONFIGS: Config[] = [
  {
    name: 'Cfg_1',
    isZip: true,
    type: 'full',
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
    type: 'diff',
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
    type: 'inc',
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
    type: 'diff',
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
    type: 'diff',
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
    type: 'diff',
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
