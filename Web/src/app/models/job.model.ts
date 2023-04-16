import { ConfigName } from 'src/app/models/names.model';
export class Job {
  id: number;
  status: number;
  target: string;
  time_Start: string;
  time_End: string;
  time_Schedule: string;
  config: ConfigName;

  public constructor(
    id: number,
    status: number,
    target: string,
    time_Start: string,
    time_End: string,
    time_Schedule: string,
    config: ConfigName
  ) {
    this.id = id;
    this.status = status;
    this.target = target;
    this.time_Start = time_Start;
    this.time_End = time_End;
    this.time_Schedule = time_Schedule;
    this.config = config;
  }
}
