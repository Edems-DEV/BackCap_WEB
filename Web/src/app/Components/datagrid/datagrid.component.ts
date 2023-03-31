import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
})
export class DatagridComponent {
  countries = COUNTRIES;
  machines = MACHINES;
  jobs = JOBS;
}

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];

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

interface Job {
  name: string;
  status: 'waiting' | 'running' | 'success' | 'failed';
  target: string[];
  time_start: Date;
  time_end: Date | null;
}

const JOBS: Job[] = [
  {
    name: 'PC1-diff_1',
    status: 'running',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
];
