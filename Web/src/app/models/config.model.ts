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
  interval_end: Date;
  sources: Source[];
  destinations: Destination[];
  machine: MachineName; // => computer's'
  group: GroupName; // => group's'
  // public constructor(
  //   id: number,
  //   name: string,
  //   description: string,
  //   type: string,
  //   isCompressed: boolean,
  //   packageSize: number,
  //   retention: number,
  //   interval: string,
  //   interval_end: Date,
  //   sources: Source[],
  //   destinations: Destination[],
  //   machine: MachineName, //[]
  //   group: GroupName // []
  // ) {
  //   this.id = id;
  //   this.name = name;
  //   this.description = description;
  //   this.type = type;
  //   this.isCompressed = isCompressed;
  //   this.packageSize = packageSize;
  //   this.retention = retention;
  //   this.interval = interval;
  //   this.interval_end = interval_end;
  //   this.sources = sources;
  //   this.destinations = destinations;
  //   this.machine = machine;
  //   this.group = group;
  // }
}
