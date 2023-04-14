export class Job {
  public id: number;
  public id_Machine: number;
  public id_Group: number;
  public id_Config: number;
  public status: number;
  public time_schedule: string;
  public time_start: string;
  public time_end: string;
  public bytes: number;
  public machine: string;
  public groups: string;
  public config: string;

  public constructor(
    id: number,
    id_Machine: number,
    id_Group: number,
    id_Config: number,
    status: number,
    time_schedule: string,
    time_start: string,
    time_end: string,
    bytes: number,
    machine: string,
    groups: string,
    config: string
  ) {
    this.id = id;
    this.id_Machine = id_Machine;
    this.id_Group = id_Group;
    this.id_Config = id_Config;
    this.status = status;
    this.time_schedule = time_schedule;
    this.time_start = time_start;
    this.time_end = time_end;
    this.bytes = bytes;
    this.machine = machine;
    this.groups = groups;
    this.config = config;
  }
}
