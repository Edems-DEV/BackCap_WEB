export class Config {
  public id: number;
  public type: number;
  public retention: number;
  public packageSize: number;
  public isCompressed: boolean;
  public backup_interval: string;
  public interval_end: string;
  public sources: string[];
  public destinations: string[];

  public constructor(
    id: number,
    type: number,
    retention: number,
    packageSize: number,
    isCompressed: boolean,
    backup_interval: string,
    interval_end: string,
    sources: string[],
    destinations: string[]
  ) {
    this.id = id;
    this.type = type;
    this.retention = retention;
    this.packageSize = packageSize;
    this.isCompressed = isCompressed;
    this.backup_interval = backup_interval;
    this.interval_end = interval_end;
    this.sources = sources;
    this.destinations = destinations;
  }
}
