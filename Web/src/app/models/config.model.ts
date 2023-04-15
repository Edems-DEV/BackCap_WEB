import { MachineName, GroupName, Source, Destination } from './names.model';

export class Config {
  id: number;
  name: string;
  description: string;
  type: string;
  isCompressed: boolean;
  packageSize: number;
  retention: number;
  backup_interval: string;
  interval_end: string;
  sources: Source[];
  destinations: Destination[];
  machines: MachineName[];
  groups: GroupName[];

  public constructor(
    id: number,
    name: string,
    description: string,
    type: string,
    isCompressed: boolean,
    packageSize: number,
    retention: number,
    backup_interval: string,
    interval_end: string,
    sources: Source[],
    destinations: Destination[],
    machines: MachineName[],
    groups: GroupName[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.isCompressed = isCompressed;
    this.packageSize = packageSize;
    this.retention = retention;
    this.backup_interval = backup_interval;
    this.interval_end = interval_end;
    this.sources = sources;
    this.destinations = destinations;
    this.machines = machines;
    this.groups = groups;
  }
}
