import { Component } from '@angular/core';

@Component({
  selector: 'app-datagrid-logs',
  templateUrl: './datagrid-logs.component.html',
  styleUrls: ['./datagrid-logs.component.scss'],
})
export class DatagridLogsComponent {
  logs = LOGS;
}

interface Log {
  time: Date;
  status: string;
  target: string;
  message: string;
}
const LOGS: Log[] = [
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
  {
    time: new Date('2022-04-30T12:00:00Z'),
    status: 'First group',
    target: 'Pc1',
    message: 'Pc1 - backed up',
  },
];
