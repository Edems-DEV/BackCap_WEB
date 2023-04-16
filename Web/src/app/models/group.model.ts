import { ConfigName, MachineName } from './names.model';

export class Group {
  public id: number;
  public name: string;
  description: string;
  machines: MachineName;
  configs: ConfigName;

  public constructor(
    id: number,
    name: string,
    description: string,
    machines: MachineName,
    configs: ConfigName
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.machines = machines;
    this.configs = configs;
  }
}
