import { MachineName, GroupName, Source, Destination } from './names.model';

export class Config {
  id: number;
  name: string;
  description: string;
  type: string;
  isCompressed: boolean; // <= isCompressed
  packageSize: number;
  retention: number; // <= retencion
  interval: string;
  interval_end: string;
  sources: Source[];
  destinations: Destination[];
  machines: MachineName[]; // => computer's'
  groups: GroupName[]; // => group's'
  public constructor(
    id: number,
    name: string,
    description: string,
    type: string,
    isCompressed: boolean,
    packageSize: number,
    retention: number,
    interval: string,
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
    this.interval = interval;
    this.interval_end = interval_end;
    this.sources = sources;
    this.destinations = destinations;
    this.machines = machines;
    this.groups = groups;
  }
}
