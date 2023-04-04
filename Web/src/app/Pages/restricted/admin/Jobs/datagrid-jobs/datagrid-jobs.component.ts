import { Component } from '@angular/core';

@Component({
  selector: 'app-datagrid-jobs',
  templateUrl: './datagrid-jobs.component.html',
  styleUrls: ['./datagrid-jobs.component.scss'],
})
export class DatagridJobsComponent {
  jobs = JOBS;
}

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
  {
    name: 'PC1-diff_2',
    status: 'success',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_3',
    status: 'failed',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_4',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_5',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_6',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_7',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_8',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_9',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_10',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_11',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_12',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_13',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_14',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
  {
    name: 'PC1-diff_15',
    status: 'waiting',
    target: ['Group_1', 'Group_2'],
    time_start: new Date('2022-04-30T12:00:00Z'),
    time_end: new Date('2022-04-30T13:00:00Z'),
  },
];
